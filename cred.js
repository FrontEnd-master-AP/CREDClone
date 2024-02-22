// const dly = gsap.timeline()
gsap.from("nav img , nav a",{
   y:-300,
   duration:1,
   delay:1,
   scrub:1

})
gsap.from(".part1 h1,.part1 p",{
    y:400,
    duration:1.5,
    delay:0.5,
    // stagger:3
    // scrub:1
})
// gsap.to(".part1 button",{
//     scale:1,
//     duration:1,
//     delay:0.5,
//     // stagger:2
//     scrub:1
// })
// gsap.from(" h1 span",{
//     y:100,
//     scale:0,
//     opacity:0,
//     duration:0.5,
//     delay:0.5
// })
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".part2",
        start:"0% 50%",
        end:"50% 50%",
        // markers:true,
        scrub:2
    }
})

tl.to("#imgthree",{
    bottom:"-3vh"
})
tl.to("#imgtwo, #imgfour",{
    bottom:"-13vh"
})
tl.to("#imgone, #imgfive",{
    bottom:"-23vh"
})


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#part5",
        start:"50% 50%",
        end:"120% 50%",
        // markers:true,
        pin:true,
        // stagger:1,
        scrub:0.5
    }
});
tl2.to("#scroll-1",{
    bottom:"30vh",
    
})
tl2.to("#scroll-1",{
    opacity:1
})
tl2.to("#scroll-1",{
    opacity:0
})
        //   1sroll
tl2.to("#scroll-2",{
    opacity:1
},'a')
// img
tl2.to(".phone-img",{
    x:"-100%"
},'a')
// --------->
tl2.to("#scroll-2",{
    bottom:"30vh",
    
})
tl2.to("#scroll-2",{
    opacity:0
})
//        2nd scroll
tl2.to("#scroll-3",{
   opacity:1
    
},'b')
// img
tl2.to(".phone-img",{
    x:"-200%"
},'b')
// -------->
tl2.to("#scroll-3",{
    bottom:"30vh"
})
tl2.to("#scroll-3",{
    opacity:0
})
//     3rd scroll
tl2.to("#scroll-4",{
    opacity:1
     
 },'c')
 // img
tl2.to(".phone-img",{
    x:"-300%"
},'c')
// -------->
