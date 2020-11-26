
const ghost = document.querySelector(".ghost")
const ghost1 = document.querySelector(".ghost1")
const cloud = document.querySelector(".cloud")
const cloud1 = document.querySelector(".cloud1")
const sign = document.querySelector(".sign")

new TweenLite.fromTo(cloud, 5, {x: 130,},{ x: 5,});
new TweenLite.fromTo(cloud1, 4, {x: 100, },{x: 170, },);
const tl = new TweenLite.fromTo(ghost, 4, { x: 0, autoAlpha: 1 }, {x: 200, autoAlpha: 0});

 
TweenLite.fromTo(ghost1, 4, {x: 200, autoAlpha: 0},{x: 0, autoAlpha: 1},"-=6");
new TweenLite.fromTo(sign, 4, { autoAlpha: 0 }, { autoAlpha: 1 } );






 
 
 