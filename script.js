let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");

let tl = gsap.timeline();

tl.to("#full",{
    right:0,
    duraction:0.8
});

tl.from("#full h4",{
    x:150,
    duraction:0.7,
    stagger:0.28,
    opacity:0
})

tl.to("#full i",{
    opacity:0.5,
})

tl.pause();

menu.addEventListener("click",function(){
    tl.play();
})

cross.addEventListener("click",function(){
    tl.reverse();
})