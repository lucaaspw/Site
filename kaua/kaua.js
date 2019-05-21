var slideItem = 0;
window.onload = function(){
    setInterval(passarSlide, 3000);

    var teste = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for(var i in objs) {
        objs[i].style.width = teste +"px";
    }
}
function passarSlide() {
    var teste = document.getElementById("slideshow").offsetWidth;
    if(slideItem >=4){
        slideItem=0;
    } else {
        slideItem ++;
    }
     
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(teste * slideItem)+"px";
}
function mudarbola(posicao){
    slideItem = posicao;
    var teste = document.getElementById("slideshow").offsetWidth;
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(teste * slideItem)+"px";
}