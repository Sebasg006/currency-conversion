var usdcop = 0;
fetch("https://api.exchangerate.host/latest?base=USD&symbols=COP")
    .then(resp => resp.json())
    .then(response => {
        console.log("usdcop" + response.rates.COP); usdcop = response.rates.COP
    });
var usdgbp = 0;
fetch("https://api.exchangerate.host/latest?base=USD&symbols=GBP")
    .then(resp => resp.json())
    .then(response => {
        console.log("usdgbp" + response.rates.GBP); usdgbp = response.rates.GBP
    });
var copusd = 0;
fetch("https://api.exchangerate.host/latest?base=COP&symbols=USD")
    .then(resp => resp.json())
    .then(response => {
        console.log(response.rates.USD); copusd = response.rates.USD
    });

var gbpusd = 0;
fetch("https://api.exchangerate.host/latest?base=GPB&symbols=USD")
    .then(resp => resp.json())
    .then(response => {
        console.log(response.rates.USD); gbpusd = response.rates.USD
    });

var copgbp = 0;
fetch("https://api.exchangerate.host/latest?base=COP&symbols=GBP")
    .then(resp => resp.json())
    .then(response => {
        console.log(response.rates.GBP); copgbp = response.rates.GBP
    });

var gbpcop = 0;
fetch("https://api.exchangerate.host/latest?base=GBP&symbols=COP")
    .then(resp => resp.json())
    .then(response => {
        console.log(response.rates.COP); gbpcop = response.rates.COP
    });

var inputpesos = document.getElementById("inputpesos");

var inputlibra =document.getElementById("inputlibra");
console.log(inputpesos);
console.log(inputDolares);
console.log(inputlibra);


function convertUsd() {
    var inputDolares=document.getElementById("inputDolares");
    let valorpesos = inputDolares.value;
    if (valorpesos == "")
        alert("ponga un valor")
    inputpesos.value  = valorpesos * usdcop;
    inputlibra.value = valorpesos * usdgbp;
}
   
function convertPesos() {
    let valorpesos = inputpesos.value;
    if (valorpesos == "")
        alert("ponga un valor")
        libra1 = copgbp * valorpesos;
        dollar1 = copusd * valorpesos;
    inputDolares.value  = dollar1;
    inputlibra.value = libra1;
}


function limpiar() {
    inputpesos.value = "";
    inputDolares.value = "";
    inputlibra.value = "";
}


function coinConvert3() {
    let valorlibra = inputlibra.value
    if (valorlibra == "")
        alert("ponga un valor")
    libra = gbpcop * valorlibra;
    dolar= gbpusd * valorlibra
    inputpesos.value = libra;
    inputDolares.value= dolar;
}





