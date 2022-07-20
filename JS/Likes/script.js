post1=document.querySelector(".post1 .top .justright p");
post2=document.querySelector(".post2 .top .justright p");
post3=document.querySelector(".post3 .top .justright p");
var c1=-1;
var c2=-1;
var c3=-1;
function like(element){
    
    switch(element){
        case 1:
            c1=-c1;
            if(c1>0){
                post1.innerText="10 Like(s)";
                document.getElementById("like1").style.backgroundColor="rgb(0, 81, 255)";
                document.getElementById("like1").style.color="white";
            }
            else{
                post1.innerText="09 Like(s)";
                document.getElementById("like1").style.backgroundColor="goldenrod";
                document.getElementById("like1").style.color="black";
            }
            break
        case 2:
            c1=-c1;
            if(c1>0){
                post2.innerText="14 Like(s)";
                document.getElementById("like2").style.backgroundColor="rgb(0, 81, 255)";
                document.getElementById("like2").style.color="white";
            }
            else{
                post2.innerText="13 Like(s)";
                document.getElementById("like2").style.backgroundColor="goldenrod";
                document.getElementById("like2").style.color="black";
            }
            break
        case 3:
            c1=-c1;
            if(c1>0){
                post3.innerText="42 Like(s)";
                document.getElementById("like3").style.backgroundColor="rgb(0, 81, 255)";
                document.getElementById("like3").style.color="white";
            }
            else{
                post3.innerText="41 Like(s)";
                document.getElementById("like3").style.backgroundColor="goldenrod";
                document.getElementById("like3").style.color="black";
            }
    }

}