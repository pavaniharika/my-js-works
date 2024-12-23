


function sum(){
    let x = document.getElementById("fv").value;
    let y = document.getElementById("sv").value;

let xval=parseInt(x)
let yval=parseInt(y)
const result = xval+yval
document.getElementById('finval').innerHTML="result is:"+ result

}


function sub(){
    let x = document.getElementById("fv").value;
    let y = document.getElementById("sv").value;

let xval=parseInt(x)
let yval=parseInt(y)
const result = xval-yval
document.getElementById('finval').innerHTML="result is:"+ result

}

function mul(){
    let x = document.getElementById("fv").value;
    let y = document.getElementById("sv").value;

let xval=parseInt(x)
let yval=parseInt(y)
const result = xval*yval
document.getElementById('finval').innerHTML="result is:"+ result

}

function div(){
    let x = document.getElementById("fv").value;
    let y = document.getElementById("sv").value;

let xval=parseInt(x)
let yval=parseInt(y)
const result = xval/yval
document.getElementById('finval').innerHTML="result is:"+ result

}
