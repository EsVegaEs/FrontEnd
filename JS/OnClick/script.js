function plusonealert1(element){
    element.innerText="14 Likes";
    alert('Ninja Was Liked');
}
function plusonealert2(element){
    element.innerText="38 Likes";
    alert('Ninja Was Liked');
}
function loginoff(element){
    if (element.innerText=="Login"){
        element.innerText="LogOff";
    }
    else{
        element.innerText="Login";
    }
}
function remove(element){
    element.remove();
}