// gsap.to("#one",{
//    width:"100%",
//    height:"100% "
// //    ease:"back",
// //    duration:2
// })

gsap.to(".image_container",{
    width:"100%",
    ease:Expo.easeInOut,
    stagger:2,
    repeat:-1

})

gsap.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:2,
    top:"0px",
    repeat:-1

})

gsap.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:2,
    delay:2,
    top:"-100%",
    repeat:-1
})