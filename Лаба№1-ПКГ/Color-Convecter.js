//начальные
const inputRed = document.querySelector(".color-red");
const inputOrange = document.querySelector(".color-orange");
const inputYellow = document.querySelector(".color-yellow");
const inputGreen = document.querySelector(".color-green");
const inputLightBlue = document.querySelector(".color-lightBlue");
const inputBlue = document.querySelector(".color-blue");
const inputPurple = document.querySelector(".color-purple");

const inputC = document.querySelector(".rect-c");
const inputM = document.querySelector(".rect-m");
const inputY = document.querySelector(".rect-y");
const inputK = document.querySelector(".rect-k");
const inputL = document.querySelector(".rect-l");
const inputA = document.querySelector(".rect-a");
const inputB = document.querySelector(".rect-b");
const inputH = document.querySelector(".rect-h");
const inputS = document.querySelector(".rect-s");
const inputV = document.querySelector(".rect-v");

const slideC = document.querySelector(".slide-c");
const slideM = document.querySelector(".slide-m");
const slideY = document.querySelector(".slide-y");
const slideK = document.querySelector(".slide-k");
const slideL = document.querySelector(".slide-l");
const slideA = document.querySelector(".slide-a");
const slideB = document.querySelector(".slide-b");
const slideH = document.querySelector(".slide-h");
const slideS = document.querySelector(".slide-s");
const slideV = document.querySelector(".slide-v");

let currentColor = null;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');


//палетка
const fillRed = () => {
    currentColor = 'red';
    fillCanvas(currentColor);
    var [cmyk, lab, hsv] = changeCMYKfromRGB(255, 0, 0);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    //changelab();
}
const fillOrange = () => {
    currentColor = 'orange';
    fillCanvas(currentColor);
    var [cmyk, lab, hsv] = changeCMYKfromRGB(255, 165, 0);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    //changelab();
}
const fillYellow = () => {
    currentColor = 'yellow';
    fillCanvas(currentColor);
    var [cmyk, lab, hsv] = changeCMYKfromRGB(255, 255, 0);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    //changelab();
}
const fillGreen = () => {
    currentColor = 'green';
    fillCanvas(currentColor);
    var [cmyk, lab, hsv] = changeCMYKfromRGB(0, 128, 0);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    //changelab();
}
const fillLightBlue = () => {
    currentColor = 'lightblue';
    fillCanvas(currentColor);
    var [cmyk, lab, hsv] = changeCMYKfromRGB(173, 216, 230);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    //changelab();
}
const fillBlue = () => {
    currentColor = 'blue';
    fillCanvas(currentColor);
    var [cmyk, lab, hsv] = changeCMYKfromRGB(0, 0, 255);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    //changelab();
}
const fillPurple = () => {
    currentColor = 'purple';
    fillCanvas(currentColor);
    var [cmyk, lab, hsv] = changeCMYKfromRGB(128, 0, 128);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    //changelab();
}


//заливка конвы
function fillCanvas(color){
    ctx.fillStyle = color;
    ctx.fillRect(0 ,0, 200,200);
    //console.log("canvas");
}


//события для палетки
inputRed.addEventListener("click", fillRed);
inputOrange.addEventListener("click", fillOrange);
inputYellow.addEventListener("click", fillYellow);
inputGreen.addEventListener("click", fillGreen);
inputLightBlue.addEventListener("click", fillLightBlue);
inputBlue.addEventListener("click", fillBlue);
inputPurple.addEventListener("click", fillPurple);


//установка моделей ввода
function setCMYK(c,m,y,k){
    inputC.value = c;
    inputM.value = m;
    inputY.value = y;
    inputK.value = k;
}
function getCMYK(){
    var c = inputC.value;
    var m = inputM.value;
    var y = inputY.value;
    var k = inputK.value;
    return [c,m,y,k];
}
function setSlideCMYK(c,m,y,k){
    slideC.value = c;
    slideM.value = m;
    slideY.value = y;
    slideK.value = k;
}
function getSlideCMYK(){
    var c = slideC.value;
    var m = slideM.value;
    var y = slideY.value;
    var k = slideK.value;
    return [c,m,y,k];
}
function setLAB(l,a,b){
    inputL.value = l;
    inputA.value = a;
    inputB.value = b;
}
function getLAB(){
    var l = inputL.value;
    var a = inputA.value;
    var b = inputB.value;
    return [l,a,b];
}
function getSlideLAB(){
    var l = slideL.value;
    var a = slideA.value;
    var b = slideB.value;
    return [l,a,b];
}
function setSlideLAB(l,a,b){
    slideL.value = l;
    slideA.value = a;
    slideB.value = b;
}
function setHSV(h,s,v){
    inputH.value = h;
    inputS.value = s;
    inputV.value = v;
}
function getHSV(){
    var h = inputH.value;
    var s = inputS.value;
    var v = inputV.value;
    return [h,s,v];
}
function setSlideHSV(h,s,v){
    slideH.value = h;
    slideS.value = s;
    slideV.value = v;
}
function getSlideHSV(){
    var h = slideH.value;
    var s = slideS.value;
    var v = slideV.value;
    return [h,s,v];
}
function setRGB(r,g,b){
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


//изменения для моделей ввода
function changeCMYKfromRGB(r,g,b){
    var cmyk = RGBtoCMYK(r,g,b);
    setCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    var [lab, hsv] = changeLABfromCMYK();
    return [cmyk, lab, hsv];
    //console.log("cmyk")
}
function changeLABfromCMYK(){
    var lab = CMYKtoLAB();
    setLAB(lab[0], lab[1], lab[2]);
    var hsv = changeHSVfromLAB();
    return [lab, hsv];
    //console.log("lab")
}
function changeLABfromHSV(){
    var lab = HSVtoLAB();
    setLAB(lab[0], lab[1], lab[2]);
    return lab;
}
function changeCMYKfromLAB(){
    var cmyk = LABtoCMYK();
    //console.log(cmyk)
    setCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    return cmyk;
}
function changeHSVfromLAB(){
    //var hsv = LABtoHSV();
    var hsv = CMYKtoHSV();
    setHSV(hsv[0], hsv[1], hsv[2]);
    return hsv;
    //console.log("hsv")
}


//функции события
function cmykclick(){
    var rgb = CMYKtoRGB();
    var color = setRGB(rgb[0], rgb[1], rgb[2]);
    fillCanvas(color);
    var cmyk = getCMYK();
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    var [lab, hsv] = changeLABfromCMYK();
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    //changehsv();
}
function labclick(){
    //var cmyk = LABtoCMYK();
    //var rgb = CMYKtoRGB();
    //var color = setRGB(rgb[0], rgb[1], rgb[2]);
    //fillCanvas(color);
    var cmyk = changeCMYKfromLAB();
    var rgb = CMYKtoRGB();
    fillCanvas(setRGB(rgb[0], rgb[1], rgb[2]));
    var lab = getLAB();
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3])
    var hsv = changeHSVfromLAB();
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
}
function hsvclick(){
    var lab = changeLABfromHSV();
    var cmyk = changeCMYKfromLAB();
    var rgb = CMYKtoRGB();
    fillCanvas(setRGB(rgb[0], rgb[1], rgb[2]));
    var hsv = getHSV();
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
}
function cmykslide(){
    var cmyk = getSlideCMYK();
    setCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    var lab = CMYKtoLAB();
    setLAB(lab[0], lab[1], lab[2]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    var hsv = changeHSVfromLAB(lab[0], lab[1], lab[2]);
    setHSV(hsv[0], hsv[1], hsv[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    var rgb = CMYKtoRGB();
    fillCanvas(setRGB(rgb[0], rgb[1], rgb[2]));
    //cmykclick();
}
function labslide(){
    var lab = getSlideLAB();
    setLAB(lab[0], lab[1], lab[2]);
    var cmyk = LABtoCMYK();
    var hsv = LABtoHSV();
    setCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setHSV(hsv[0], hsv[1], hsv[2]);
    setSlideHSV(hsv[0], hsv[1], hsv[2]);
    var rgb = CMYKtoRGB();
    fillCanvas(setRGB(rgb[0], rgb[1], rgb[2]));
}
function hsvslide(){
    var hsv = getSlideHSV();
    setHSV(hsv[0],hsv[1], hsv[2]);
    var lab = HSVtoLAB();
    setLAB(lab[0], lab[1], lab[2]);
    setSlideLAB(lab[0], lab[1], lab[2]);
    var cmyk = LABtoCMYK();
    setCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    setSlideCMYK(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
    var rgb = CMYKtoRGB();
    fillCanvas(setRGB(rgb[0], rgb[1], rgb[2]));
}


//корвертация
//rgb в CMYK "rgb в cmyk"
function RGBtoCMYK(r,g,b){
    var k = Math.min(1 - r/255, 1 - g/255, 1 - b/255);
    var c = (1 - r/255 - k)/(1 - k);
    var m = (1 - g/255 - k)/(1 - k);
    var y = (1 - b/255 - k)/(1 - k);
    return [c,m,y,k];
}
function CMYKtoRGB(){
    var cmyk = getCMYK();
    //console.log("CMYKtoRGB: cmyk in func", cmyk)
    var little = 0.999;
    var r = 255 * (1 - cmyk[0] * little) * (1 - cmyk[3] * little);
    var g = 255 * (1 - cmyk[1] * little) * (1 - cmyk[3] * little);
    var b = 255 * (1 - cmyk[2] * little) * (1 - cmyk[3] * little);
    return [r,g,b];
}
function RGBtoXYZ(R,G,B){
    var r = R / 255;
    var g = G / 255;
    var b = B / 255;

    r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
    g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
    b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

    var x = ((r * 0.4124) + (g * 0.3576) + (b * 0.1805));
    var y = ((r * 0.2126) + (g * 0.7152) + (b * 0.0722));
    var z = ((r * 0.0193) + (g * 0.1192) + (b * 0.9505));

    return [x, y, z];
}
function XYZtoRGB(x,y,z){
    var r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
    var g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
    var b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

    r = r > 0.0031308
      ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
      : r * 12.92;

    g = g > 0.0031308
      ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
      : g * 12.92;

    b = b > 0.0031308
      ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
      : b * 12.92;

    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);

    return [r * 255, g * 255, b * 255];
}
function XYZtoLAB(X,Y,Z){
    var ref_X =  95.047;
    var ref_Y = 100.000;
    var ref_Z = 108.883;

    var_X = X * 100 / ref_X
    var_Y = Y * 100 / ref_Y
    var_Z = Z * 100 / ref_Z

    if ( var_X >= 0.008856 ) 
        var_X = Math.pow(var_X,1/3);
    else                    
        var_X = ( 7.787 * var_X ) + ( 16 / 116 );
    if ( var_Y >= 0.008856 ) 
        var_Y = Math.pow(var_Y,1/3);
    else                    
        var_Y = ( 7.787 * var_Y ) + ( 16 / 116 );
    if ( var_Z >= 0.008856 ) 
        var_Z = Math.pow(var_Z,1/3);
    else                    
        var_Z = ( 7.787 * var_Z ) + ( 16 / 116 );

    CIE_L = ( 116 * var_Y ) - 16;
    CIE_a = 500 * ( var_X - var_Y );
    CIE_b = 200 * ( var_Y - var_Z );

return [CIE_L, CIE_a, CIE_b]
}
function LABtoXYZ(L,A,B){
    //var l = L/100;
    //var a = A/100;
    //var b = B/100;

    let l = parseFloat(L)
    let a = parseFloat(A)
    let b = parseFloat(B)

    var ref_X =  95.047;
    var ref_Y = 100.000;
    var ref_Z = 108.883;

    var var_X = a/500 + (l + 16)/116;
    var var_Y = (l + 16)/116;
    var var_Z = (l + 16)/116 - b/200;

    if( Math.pow(var_X, 3) >= 0.008856 ) 
        var_X = Math.pow(var_X, 3);
    else
        var_X = (var_X - (16/116))/7.787;
    if( Math.pow(var_Y, 3) >= 0.008856 ) 
        var_Y = Math.pow(var_Y, 3);
    else
        var_Y = (var_Y - (16/116))/7.787;
    if( Math.pow(var_Z, 3) >= 0.008856 ) 
        var_Z = Math.pow(var_Z, 3);
    else
        var_Z = (var_Z - (16/116))/7.787;

    var x = var_X;
    var y = var_Y;
    var z = var_Z;

    return [x,y,z];
}


//ВАЖНО!!!!!!!!!!!!!!!!!!!!!!!!
function RGBtoHSV(R,G,B){
    var r = R / 255;
    var g = G / 255;
    var b = B / 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
        h = 0; // achromatic
    } 
    else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

  return [ h, s, v ];
}
function HSVtoRGB(h,s,v){
    var r, g, b;

    var i = Math.floor(h / 60.0);
    var f = h / 60.0 - Math.floor(h / 60.0);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - ((1.0 - f) * s));

    switch (i % 6) {
        case 0: r = v * 255, g = t * 255, b = p * 255; break;
        case 1: r = q * 255, g = v * 255, b = p * 255; break;
        case 2: r = p * 255, g = v * 255, b = t * 255; break;
        case 3: r = p * 255, g = q * 255, b = v * 255; break;
        case 4: r = t * 255, g = p * 255, b = v * 255; break;
        case 5: r = v * 255, g = p * 255, b = q * 255; break;
    }

    return [ r, g, b];
}
//cmyk в lab "cmyk в rgb в xyz в lab"
function CMYKtoLAB(){
    var rgb = CMYKtoRGB();
    //console.log("cmykTOlab: rgb", rgb);
    var xyz = RGBtoXYZ(rgb[0], rgb[1], rgb[2]);
    //console.log("cmykTOlab: xyz", xyz);
    var lab = XYZtoLAB(xyz[0], xyz[1], xyz[2]);
    //console.log("cmykTOlab: lab", lab);
    return lab;
}
function LABtoCMYK(){
    var lab = getLAB();
    //console.log("labTOcmyk: lab", lab)
    var xyz = LABtoXYZ(lab[0], lab[1], lab[2]);
    console.log("labTOcmyk: xyz", xyz)
    var rgb = XYZtoRGB(xyz[0], xyz[1], xyz[2]);
    console.log("labTOcmyk: rgb", rgb)
    var cmyk = RGBtoCMYK(rgb[0], rgb[1], rgb[2]);
    return cmyk;
}
//lab в hsv "lab в xyz в rgb в hsv"
function LABtoHSV(){
    var lab = getLAB();
   //console.log("labTOhsv: lab", lab);
    var xyz = LABtoXYZ(lab[0], lab[1], lab[2]);
    //console.log("labTOhsv: xyz", xyz);
    var rgb = XYZtoRGB(xyz[0], xyz[1], xyz[2]);
    //console.log("labTOhsv: rgb", rgb);
    var hsv = RGBtoHSV(rgb[0], rgb[1], rgb[2]);
    //console.log("labTOhsv: hsv", hsv);
    return hsv;
}
function CMYKtoHSV(){
    var cmyk = getCMYK();
    //console.log("cmykTOhsv: cmyk", cmyk);
    var rgb = CMYKtoRGB();
    //console.log("cmykTOhsv: rgb", rgb);
    var hsv = RGBtoHSV(rgb[0], rgb[1], rgb[2]);
    //console.log("cmykTOhsv: hsv", hsv);
    return hsv;
}
function HSVtoLAB(){
    var hsv = getHSV();
    console.log("hsv", hsv)
    var rgb = HSVtoRGB(hsv[0], hsv[1], hsv[2]);
    console.log("rgb", rgb)
    var xyz = RGBtoXYZ(rgb[0], rgb[1], rgb[2]);
    console.log("xyz", xyz)
    var lab = XYZtoLAB(xyz[0], xyz[1], xyz[2]);
    console.log("lab", lab)
    return lab;
}

///!!!!!!ВАЖНО!!!!!!!!
//валидация RGB значений
function validateRGBInput(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
}
//валидация CMYK значений
function validateCMYKInput(c, m, y, k) {
    return c >= 0 && c <= 1 && m >= 0 && m <= 1 && y >= 0 && y <= 1 && k >= 0 && k <= 1;
}
//валидация LAB значений
function validateLABInput(l, a, b) {
    return l >= 0 && l <= 100 && a >= -128 && a <= 127 && b >= -128 && b <= 127;
}
//валидация HSV значений
function validateHSVInput(h, s, v) {
    return h >= 0 && h <= 360 && s >= 0 && s <= 1 && v >= 0 && v <= 1;
}
//изменение фона при ошибке
function setBackgroundError(isError) {
    if (isError) {
        document.body.style.backgroundColor = 'red'; //цвет фона при ошибке
    } else {
        document.body.style.backgroundColor = ''; //возвращение к обычному фону
    }
}
//функция проверки и изменения фона
function checkAndValidateInput() {
    //получаем значения CMYK
    var [c, m, y, k] = getCMYK();
    //проверяем валидность значений
    var isValidCMYK = validateCMYKInput(c, m, y, k);
    //для других моделей
    var [r, g, b] = CMYKtoRGB();
    var isValidRGB = validateRGBInput(r, g, b);

    var [l, a, bLab] = getLAB();
    var isValidLAB = validateLABInput(l, a, bLab);

    var [h, s, v] = getHSV();
    var isValidHSV = validateHSVInput(h, s, v);

    //если хоть одно значение некорректное, меняем фон
    var hasError = !isValidCMYK || !isValidRGB || !isValidLAB || !isValidHSV;
    setBackgroundError(hasError);
}

//добавляем проверку при каждом изменении
inputC.addEventListener('input', checkAndValidateInput);
inputM.addEventListener('input', checkAndValidateInput);
inputY.addEventListener('input', checkAndValidateInput);
inputK.addEventListener('input', checkAndValidateInput);

inputL.addEventListener('input', checkAndValidateInput);
inputA.addEventListener('input', checkAndValidateInput);
inputB.addEventListener('input', checkAndValidateInput);

inputH.addEventListener('input', checkAndValidateInput);
inputS.addEventListener('input', checkAndValidateInput);
inputV.addEventListener('input', checkAndValidateInput);

//проверка для слайдеров
slideC.addEventListener('input', checkAndValidateInput);
slideM.addEventListener('input', checkAndValidateInput);
slideY.addEventListener('input', checkAndValidateInput);
slideK.addEventListener('input', checkAndValidateInput);

slideL.addEventListener('input', checkAndValidateInput);
slideA.addEventListener('input', checkAndValidateInput);
slideB.addEventListener('input', checkAndValidateInput);

slideH.addEventListener('input', checkAndValidateInput);
slideS.addEventListener('input', checkAndValidateInput);
slideV.addEventListener('input', checkAndValidateInput);


