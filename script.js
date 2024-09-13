var cursur = document.querySelector("body")
var dotted = document.querySelector(".dott")
var dottedblur = document.querySelector(".dott-blur")

cursur.addEventListener("mousemove", (move) => {
    dotted.style.left = move.x + "px"
    dotted.style.top = move.y + "px"
    dottedblur.style.left = move.x - 150 + "px"
    dottedblur.style.top = move.y - 150 + "px"
})

var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")

setTimeout(() => {
    img2.style.opacity = "1";
}, 2000)

setTimeout(() => {
    img3.style.opacity = "1";
}, 4000)

var li4 = document.querySelectorAll(".element li")

li4.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
        dotted.style.scale = "5"
        dotted.style.border = "1px solid white"
        dotted.style.backgroundColor = "transparent"
        dotted.style.transition = "all ease 0.2s"
        ele.style.color = "black"
    })
    ele.addEventListener("mouseleave", () => {
        dotted.style.scale = "1"
        dotted.style.border = "0px solid white"
        dotted.style.backgroundColor = "#91B508"
        ele.style.color = "white"
    })
})


var carda = document.querySelector(".card-1")
var cardb = document.querySelector(".card-2")
var cardc = document.querySelector(".card-3")

carda.addEventListener("mouseenter", () => {
    dotted.style.scale = "4"
    dotted.style.border = "1px solid white"
    dotted.style.backgroundColor = "transparent"
    dotted.style.transition = "all ease 0.2s"
    // transition: all ease 1s;  
})
carda.addEventListener("mouseleave", () => {
    dotted.style.scale = "1"
    dotted.style.border = "0px solid white"
    dotted.style.backgroundColor = "#91B508"
})
cardb.addEventListener("mouseenter", () => {
    dotted.style.scale = "4"
    dotted.style.border = "1px solid white"
    dotted.style.backgroundColor = "transparent"
    dotted.style.transition = "all ease 0.2s"
    // transition: all ease 1s;  
})
cardb.addEventListener("mouseleave", () => {
    dotted.style.scale = "1"
    dotted.style.border = "0px solid white"
    dotted.style.backgroundColor = "#91B508"
})
cardc.addEventListener("mouseenter", () => {
    dotted.style.scale = "4"
    dotted.style.border = "1px solid white"
    dotted.style.backgroundColor = "transparent"
    dotted.style.transition = "all ease 0.2s"
    // transition: all ease 1s;  
})
cardc.addEventListener("mouseleave", () => {
    dotted.style.scale = "1"
    dotted.style.border = "0px solid white"
    dotted.style.backgroundColor = "#91B508"
})



var lastcard = document.querySelectorAll(".last-images .boxes")

lastcard.forEach((eleme) => {
    eleme.addEventListener("mouseenter", () => {
        dotted.style.scale = "4"
        dotted.style.border = "1px solid white"
        dotted.style.backgroundColor = "transparent"
        dotted.style.transition = "all ease 0.2s"
        dotted.style.zIndex = "5"
        // transition: all ease 1s;  
    })
    eleme.addEventListener("mouseleave", () => {
        dotted.style.scale = "1"
        dotted.style.border = "0px solid white"
        dotted.style.backgroundColor = "#91B508"
    })
})


var li11 = document.querySelector(".li1 img")
li11.addEventListener("mouseenter", () => {
    dotted.style.scale = "4"
    dotted.style.border = "1px solid white"
    dotted.style.backgroundColor = "transparent"
    dotted.style.transition = "all ease 0.2s"
    dotted.style.zIndex = "5"
    li11.style.transition = "all ease 0.3s"
    li11.style.scale = "0.8"
})
li11.addEventListener("mouseleave", () => {
    dotted.style.scale = "1"
    dotted.style.border = "0px solid white"
    dotted.style.backgroundColor = "#91B508"
    li11.style.scale = "1"
    // li222.style.color = "black"
})


var li1 = document.querySelectorAll(".li1 .icon i")

li1.forEach((elle) => {
    elle.addEventListener("mouseenter", () => {
        dotted.style.scale = "4"
        dotted.style.border = "1px solid white"
        dotted.style.backgroundColor = "transparent"
        dotted.style.transition = "all ease 0.2s"
        dotted.style.zIndex = "5"
        elle.style.transition = "all ease 0.3s"
        elle.style.color = "white"
    })
    elle.addEventListener("mouseleave", () => {
        dotted.style.scale = "1"
        dotted.style.border = "0px solid white"
        dotted.style.backgroundColor = "#91B508"
        elle.style.scale = "1"
        elle.style.color = "black"
    })
})

var li22 = document.querySelectorAll(".li2 h2")

li22.forEach((li222) => {
    li222.addEventListener("mouseenter", () => {
        dotted.style.scale = "4"
        dotted.style.border = "1px solid white"
        dotted.style.backgroundColor = "transparent"
        dotted.style.transition = "all ease 0.2s"
        dotted.style.zIndex = "5"
        li222.style.color = "white"
        li222.style.transition = "all ease 0.3s"
        // transition: all ease 1s;  
    })
    li222.addEventListener("mouseleave", () => {
        dotted.style.scale = "1"
        dotted.style.border = "0px solid white"
        dotted.style.backgroundColor = "#91B508"
        li222.style.color = "black"
    })
})


var li33 = document.querySelectorAll(".li3 h2")

li33.forEach((li333) => {
    li333.addEventListener("mouseenter", () => {
        dotted.style.scale = "4"
        dotted.style.border = "1px solid white"
        dotted.style.backgroundColor = "transparent"
        dotted.style.transition = "all ease 0.2s"
        dotted.style.zIndex = "5"
        // transition: all ease 1s;  
        li333.style.color = "white"
        li333.style.transition = "all ease 0.3s"

    })
    li333.addEventListener("mouseleave", () => {
        dotted.style.scale = "1"
        dotted.style.border = "0px solid white"
        dotted.style.backgroundColor = "#91B508"
        li333.style.color = "black"
    })
})


var li444 = document.querySelector(".li4 h2")

li444.addEventListener("mouseenter", () => {
    dotted.style.scale = "4"
    dotted.style.border = "1px solid white"
    dotted.style.backgroundColor = "transparent"
    dotted.style.transition = "all ease 0.2s"
    dotted.style.zIndex = "5"
    // transition: all ease 1s;  
    li444.style.color = "white"
    li444.style.transition = "all ease 0.3s"

})
li444.addEventListener("mouseleave", () => {
    dotted.style.scale = "1"
    dotted.style.border = "0px solid white"
    dotted.style.backgroundColor = "#91B508"
    li444.style.color = "black"
})


var copyy = document.querySelector(".copy h2")

copyy.addEventListener("mouseenter", () => {
    dotted.style.scale = "4"
    dotted.style.border = "1px solid white"
    dotted.style.backgroundColor = "transparent"
    dotted.style.transition = "all ease 0.2s"
    dotted.style.zIndex = "5"
    // transition: all ease 1s;  
    copyy.style.color = "white"
    copyy.style.transition = "all ease 0.3s"

})
copyy.addEventListener("mouseleave", () => {
    dotted.style.scale = "1"
    dotted.style.border = "0px solid white"
    dotted.style.backgroundColor = "#91B508"
    copyy.style.color = "black"
})


gsap.to(".element", {
    backgroundColor: "black",
    duration: "1",
    // delay: "0.5",
    height: "13vh",
    scrollTrigger: {
        trigger: ".element",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top 10%",
        scrub: 2
    }
})

gsap.to("main", {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    // width:" 100vw",
    // duration: "3",
    // dele:3,
    scrollTrigger: {
        trigger: "main",
        scroller: "body",
        //  markers:true,
        start: "top -30%",
        end: "top -30%",
        // start:"top -50%"
        scrub: 5
    }
})


gsap.to(".side-container", {
    y: -80,
    duration: 3,
    scrollTrigger: {
        trigger: ".side-container",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        // markers:true,
        scrub: 5,
    }
})

gsap.to(".card-1", {
    // opacity:0,
    scale: 1,
    duration: 2,
    scrollTrigger: {
        trigger: ".card-1",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        // markers:true,
        scrub: 2,
    }
})
gsap.to(".card-2", {
    // opacity:0,
    scale: 1,
    duration: 2,
    scrollTrigger: {
        trigger: ".card-1",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        // markers:true,
        scrub: 2,
    }
})
gsap.to(".card-3", {
    // opacity:0,
    scale: 1,
    duration: 2,
    scrollTrigger: {
        trigger: ".card-1",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        // markers:true,
        scrub: 3,
    }
})

gsap.to(".iml", {
    y: 40,
    x: 30,
    duration: 2,
    scrollTrigger: {
        trigger: ".iml",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        // markers:true,
        scrub: 3,
    }
})

gsap.to(".imr", {
    y: -50,
    x: -50,
    duration: 2,
    scrollTrigger: {
        trigger: ".iml",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        // markers:true,
        scrub: 3,
    }
})

gsap.to(".last-container h1", {
    y: -35,
    //   duration:2,
    scrollTrigger: {
        trigger: ".last-container h1",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        // markers:true,
        scrub: 3,
    }
})