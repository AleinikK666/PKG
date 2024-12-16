let originalImg;
let processedImg;
let imageLoader = document.getElementById('imageLoader');

// Загружаем изображение при выборе файла
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        originalImg = loadImage(event.target.result, () => {
            createCanvas(originalImg.width * 2, originalImg.height);
            processedImg = createImage(originalImg.width, originalImg.height);
            resetImage(); // Вызов функции сброса
            drawResult();
        });
    };
    reader.readAsDataURL(e.target.files[0]);
}

// p5.js функция setup() вызывается один раз при инициализации
function setup() {
    noLoop(); // Останавливаем автоматическую перерисовку
}

// Сброс изображения к оригинальному
function resetImage() {
    processedImg.copy(originalImg, 0, 0, originalImg.width, originalImg.height, 0, 0, originalImg.width, originalImg.height);
}

// Добавление изменений на изображение
function applyChanges(callback) {
    if (!originalImg) return;

    processedImg.loadPixels();
    callback();
    processedImg.updatePixels();
    drawResult();
}

// Реализация низкочастотного фильтра (сглаживающего)
function applyLowPassFilter() {
    applyChanges(() => {
        const kernel = [
            [1 / 9, 1 / 9, 1 / 9],
            [1 / 9, 1 / 9, 1 / 9],
            [1 / 9, 1 / 9, 1 / 9]
        ];

        let tempImg = createImage(processedImg.width, processedImg.height);
        tempImg.copy(processedImg, 0, 0, processedImg.width, processedImg.height, 0, 0, processedImg.width, processedImg.height); // Копируем текущее состояние

        for (let x = 1; x < processedImg.width - 1; x++) {
            for (let y = 1; y < processedImg.height - 1; y++) {
                let r = 0, g = 0, b = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        let c = tempImg.get(x + i, y + j);
                        r += red(c) * kernel[i + 1][j + 1];
                        g += green(c) * kernel[i + 1][j + 1];
                        b += blue(c) * kernel[i + 1][j + 1];
                    }
                }
                processedImg.set(x, y, color(r, g, b));
            }
        }
    });
}

// Функция для линейного контрастирования
function applyLinearContrast() {
    applyChanges(() => {
        // Находим минимальное и максимальное значения яркости
        let minVal = 255, maxVal = 0;
        for (let i = 0; i < processedImg.pixels.length; i += 4) {
            const brightness = Math.round(0.299 * processedImg.pixels[i] + 
                                          0.587 * processedImg.pixels[i + 1] + 
                                          0.114 * processedImg.pixels[i + 2]);
            if (brightness < minVal) minVal = brightness;
            if (brightness > maxVal) maxVal = brightness;
        }

        console.log(`Min: ${minVal}, Max: ${maxVal}`); // Отладка

        // Применение линейного контрастирования
        const scale = 255 / (maxVal - minVal);
        for (let i = 0; i < processedImg.pixels.length; i += 4) {
            processedImg.pixels[i] = (processedImg.pixels[i] - minVal) * scale;
            processedImg.pixels[i + 1] = (processedImg.pixels[i + 1] - minVal) * scale;
            processedImg.pixels[i + 2] = (processedImg.pixels[i + 2] - minVal) * scale;
            processedImg.pixels[i + 3] = 255; // Alpha канал
        }
    });
}

// Эквализация гистограммы для RGB
function equalizeHistogram() {
    applyChanges(() => {
        const histogram = new Array(256).fill(0);
        for (let i = 0; i < processedImg.pixels.length; i += 4) {
            const brightness = Math.round(0.299 * processedImg.pixels[i] + 
                                          0.587 * processedImg.pixels[i + 1] + 
                                          0.114 * processedImg.pixels[i + 2]);
            histogram[brightness]++;
        }

        // Вычисление CDF (Cumulative Distribution Function)
        const cdf = new Array(256).fill(0);
        cdf[0] = histogram[0];
        for (let i = 1; i < 256; i++) {
            cdf[i] = cdf[i - 1] + histogram[i];
        }

        // Применение эквализации
        for (let i = 0; i < processedImg.pixels.length; i += 4) {
            const brightness = Math.round(0.299 * processedImg.pixels[i] + 
                                          0.587 * processedImg.pixels[i + 1] + 
                                          0.114 * processedImg.pixels[i + 2]);
            const equalizedValue = Math.round((cdf[brightness] - cdf[0]) / 
                                              (processedImg.pixels.length / 4 - cdf[0]) * 255);
            processedImg.pixels[i] = processedImg.pixels[i + 1] = processedImg.pixels[i + 2] = equalizedValue;
            processedImg.pixels[i + 3] = 255; // Alpha канал
        }
    });
}

// Эквализация гистограммы для компоненты яркости HSV
function equalizeHistogramHSV() {
    applyChanges(() => {
        const tempImg = createImage(processedImg.width, processedImg.height);
        tempImg.copy(processedImg, 0, 0, processedImg.width, processedImg.height, 0, 0, processedImg.width, processedImg.height); // Копируем текущее состояние

        tempImg.loadPixels();

        const histogram = new Array(256).fill(0);
        for (let i = 0; i < tempImg.pixels.length; i += 4) {
            const c = tempImg.pixels[i], g = tempImg.pixels[i + 1], b = tempImg.pixels[i + 2];
            let hsv = rgbToHsv(c, g, b);
            histogram[Math.round(hsv[2] * 255)]++; // Увеличиваем значение яркости
        }

        // Вычисление CDF (Cumulative Distribution Function)
        const cdf = new Array(256).fill(0);
        cdf[0] = histogram[0];
        for (let i = 1; i < 256; i++) {
            cdf[i] = cdf[i - 1] + histogram[i];
        }

        // Применение эквализации
        for (let i = 0; i < processedImg.pixels.length; i += 4) {
            const c = processedImg.pixels[i], g = processedImg.pixels[i + 1], b = processedImg.pixels[i + 2];
            let hsv = rgbToHsv(c, g, b);
            hsv[2] = Math.round((cdf[Math.round(hsv[2] * 255)] - cdf[0]) / 
                                 (tempImg.pixels.length / 4 - cdf[0]) * 255);
            let rgb = hsvToRgb(hsv[0], hsv[1], hsv[2]);
            processedImg.set(i / 4 % processedImg.width, Math.floor(i / 4 / processedImg.width), color(rgb[0], rgb[1], rgb[2]));
        }
    });
}

// Перерисовка результата
function drawResult() {
    clear();
    image(originalImg, 0, 0);
    image(processedImg, originalImg.width, 0);
}

// Преобразование RGB в HSV
function rgbToHsv(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    let d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, v];
}

// Преобразование HSV в RGB
function hsvToRgb(h, s, v) {
    let r, g, b;
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    i = i % 6;
    switch (i) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Обработка события на кнопку "Возврат к исходному изображению"
document.getElementById('resetButton').addEventListener('click', () => {
    resetImage();
    drawResult(); // Перерисовать результат после сброса
});

// Привязка других кнопок
document.getElementById('lowPassFilterButton').addEventListener('click', applyLowPassFilter);
document.getElementById('linearContrastButton').addEventListener('click', applyLinearContrast);
document.getElementById('equalizeHistogramButton').addEventListener('click', equalizeHistogram);
document.getElementById('equalizeHistogramHSVButton').addEventListener('click', equalizeHistogramHSV);
