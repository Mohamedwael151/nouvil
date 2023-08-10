let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.querySelector(".nouvil");
window.onscroll =function(){
     let value =scrollY;
    
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river.style.top = value  + "px";
    boat.style.top = value  + "px";
    boat.style.left = value * 3 + "px";
    nouvil.style.fontSize = value  + "px";
    if(scrolly >= 71.19999694824219){
        nouvil.style.fontsize = 71.19999694824219  + "px";
    
    }
    if(scrollY >= 127)
    document.querySelector(".main").style.background = "linear-graadient(#376281,#10001f);"

}