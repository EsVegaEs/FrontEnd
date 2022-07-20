function citychange(){
    alert('Loading Weather Report...')
}
function removecookies(){
    document.getElementById('cookies').remove();
}

//For temp changes:
var max1=24;
var min1=18;
var max2=27;
var min2=19;
var max3=21;
var min3=16;
var max4=20;
var min4=15;
function showTempIn(element){
    if(element.value=='°C'){
        document.getElementById('maxtemp1').innerText=max1+"°";
        document.getElementById('mintemp1').innerText=min1+"°";
        document.getElementById('maxtemp2').innerText=max2+"°";
        document.getElementById('mintemp2').innerText=min2+"°";
        document.getElementById('maxtemp3').innerText=max3+"°";
        document.getElementById('mintemp3').innerText=min3+"°";
        document.getElementById('maxtemp4').innerText=max4+"°";
        document.getElementById('mintemp4').innerText=min4+"°";
    }
    if(element.value=='°F'){
        document.getElementById('maxtemp1').innerText=max1*1.8+32+"°";
        document.getElementById('mintemp1').innerText=min1*1.8+32+"°";
        document.getElementById('maxtemp2').innerText=max2*1.8+32+"°";
        document.getElementById('mintemp2').innerText=min2*1.8+32+"°";
        document.getElementById('maxtemp3').innerText=(max3*1.8+32).toFixed(1)+"°";
        document.getElementById('mintemp3').innerText=min3*1.8+32+"°";
        document.getElementById('maxtemp4').innerText=max4*1.8+32+"°";
        document.getElementById('mintemp4').innerText=min4*1.8+32+"°";
    }
    if(element.value=='Rankine'){
        document.getElementById('maxtemp1').innerText=max1*1.8+492+"°";
        document.getElementById('mintemp1').innerText=min1*1.8+492+"°";
        document.getElementById('maxtemp2').innerText=max2*1.8+492+"°";
        document.getElementById('mintemp2').innerText=min2*1.8+492+"°";
        document.getElementById('maxtemp3').innerText=(max3*1.8+492).toFixed(1)+"°";
        document.getElementById('mintemp3').innerText=min3*1.8+492+"°";
        document.getElementById('maxtemp4').innerText=max4*1.8+492+"°";
        document.getElementById('mintemp4').innerText=min4*1.8+492+"°";
        
    }
    if(element.value=='Kelvin'){
        document.getElementById('maxtemp1').innerText=max1+273+"°";
        document.getElementById('mintemp1').innerText=min1+273+"°";
        document.getElementById('maxtemp2').innerText=max2+273+"°";
        document.getElementById('mintemp2').innerText=min2+273+"°";
        document.getElementById('maxtemp3').innerText=max3+273+"°";
        document.getElementById('mintemp3').innerText=min3+273+"°";
        document.getElementById('maxtemp4').innerText=max4+273+"°";
        document.getElementById('mintemp4').innerText=min4+273+"°";
        
    }
}