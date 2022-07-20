const display = document.getElementById("display");
var n1 = "";
var n2 = "";
var op = "";

var a = parseFloat(n2);
var b = parseFloat(n1);
var ans = 0;

function number(num) {
    n1 += num;
    display.innerHTML += num;
}
function del1(){
    n1=n1.substring(0, n1.length - 1);
    display.innerHTML=n1; 

}
function operator(key) {
    op = key;
    n2 = n1;
    n1 = "";
    display.innerHTML = n2+String(key);
}
function spec(key){
    if(key=="1/x"){
        ans=1/n1;
        display.innerHTML = ans;
        n1=string(ans);
    }
    else if(key=="x2"){
        ans=n1*n1;
        display.innerHTML = ans;
        n1=string(ans);
    }
    op='';
}
function clr() {
    n1 = "";
    n2 = "";
    op = "";
    display.innerHTML = "0";
}

function calculate() {
    a = parseFloat(n2);
    b = parseFloat(n1);
    ans = 0;
    if(op=="+"){
        ans = a + b;
    }
    else if(op=="-"){
        ans = a - b;
    }
    else if(op=="*"){
        ans = a * b;
    }
    else if(op=="/"){
        ans = a / b;
    }
    else if(op==""){
        ans=b;
    }
    else if(op=="1/x"){
        ans=1/b;
    }
    else if(op=="x2"){
        ans=b*b;
    }
    
    n1 = String(ans);
    op = "";
    display.innerHTML = ans;
}