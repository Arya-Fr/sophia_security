var log = document.getElementById("log");
var reg = document.getElementById("reg");
var pop = document.getElementById("pop");
var toggle = document.querySelector('.toggle');
var body = document.querySelector('body');

document.getElementById("butlog").addEventListener( "click" ,function(){
    pop.style.display = "block";
    log.style.display = "block";
    document.body.style.overflow = "hidden";
})
document.getElementById("butreg").addEventListener( "click" ,function(){
    pop.style.display = "block";
    reg.style.display = "block";
    document.body.style.overflow = "hidden";
})

pop.addEventListener("click", function(){
    log.style.display = "none";
    reg.style.display = "none";
    pop.style.display = "none";
    document.body.style.overflow = "visible";
})

toggle.addEventListener('click' , function(){
    body.classList.toggle('open');
})


