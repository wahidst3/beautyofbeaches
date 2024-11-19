

   
gsap.from("#page4 .minipost",{
    scale:.8,
    
    opacity:0,
    duration:.2,
  
    scrollTrigger:{
        trigger:'.minipost',
        scroller:'body',
        start:'top 70%',
        end:'top 65%',
        scrub:3
    }
})
   


gsap.from("#page4 .post1",{
    y:80,
    scrollTrigger:{
        trigger:"#page4",
        scroller:'body',
        start:'top 75%',
        end:'top 70%',
        scrub:3
    }
})
gsap.from("#page3 .img",{
    scale:.8,
    
    opacity:0,
    duration:.2,
    scrollTrigger:{
        trigger:".img",
        scroller:'body',
        start:'top 75%',
        end:'top 70%',
        scrub:3
    }
})
gsap.from(".context p",{
    y:-70,
    
    scrollTrigger:{
        trigger:".context",
        scroller:'body',
        start:'top 75%',
        end:'top 70%',
        scrub:3
    }
})