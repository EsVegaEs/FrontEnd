const vid=document.querySelector("video")
vid.muted=true;
function play() {
    vid.play(); 
}
function pause(){
    vid.pause();
}
function muteunmute(){
    if (vid.muted){
        vid.muted=false;
    }
    else{
        vid.muted=true;
    }
}