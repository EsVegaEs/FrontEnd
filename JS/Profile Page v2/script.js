function epr(){
    document.querySelector('.name').innerText="Esteban Vega"
}
var NNewCons=2;
var NOldCons=126;
function addcon(name){

    if(name=='todd'){
        NNewCons-=1;
        (document.getElementById('addconnection1')).remove();
    }
    if(name=='phil'){
        NNewCons-=1;
        (document.getElementById('addconnection2')).remove();
    }
    NOldCons+=1;
    document.getElementById('numberofnewcons').innerText=NNewCons;
    document.getElementById('numberofoldcons').innerText=NOldCons;

}
function removecon(name){
    if(name=='todd'){
        NNewCons-=1;
        (document.getElementById('addconnection1')).remove();
    }
    if(name=='phil'){
        NNewCons-=1;
        (document.getElementById('addconnection2')).remove();
    }
    document.getElementById('numberofnewcons').innerText=NNewCons;
}