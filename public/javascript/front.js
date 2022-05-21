var log = document.getElementById("log");
var reg = document.getElementById("reg");
var pro = document.getElementById("pro");
var pop = document.getElementById("pop");
var test = document.getElementById("test");
var toggle = document.querySelector('.toggle');
var body = document.querySelector('body');

var but1 = document.getElementById("butlog");
var but2 = document.getElementById("butreg");
var but3 = document.getElementById("butpro");

if (but1 != null){
    but1.addEventListener( "click" ,function(){
        pop.style.display = "block";
        log.style.display = "block";
        document.body.style.overflow = "hidden";
    })
}

if (but2 != null){
    but2.addEventListener( "click" ,function(){
        pop.style.display = "block";
        reg.style.display = "block";
        document.body.style.overflow = "hidden";
    })
}

if (but3 != null){
    but3.addEventListener( "click" ,function(){
        pop.style.display = "block";
        pro.style.display = "block";
        document.body.style.overflow = "hidden";
    })
}

pop.addEventListener("click", function(){
    log.style.display = "none";
    reg.style.display = "none";
    pro.style.display = "none";
    pop.style.display = "none";
    document.body.style.overflow = "visible";
})

toggle.addEventListener('click' , function(){
    body.classList.toggle('open');
})

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.onglets');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

