var crs = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (delts) {
  crs.style.left = delts.x + 20 + "px";
  crs.style.top = delts.y + "px";
  blur.style.left = delts.x - 150 + "px";
  blur.style.top = delts.y - 150 + "px";
});

var h4 = document.querySelectorAll("#nav h4");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crs.style.scale = 3;
    crs.style.border = "1px solid #fff";
    crs.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crs.style.scale = 1;
    crs.style.border = "0px solid #95c11e";
    crs.style.backgroundColor = "#95c11e";
  });
});
var h2 = document.querySelectorAll("#page4 h2");
h2.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crs.style.scale = 3;
    crs.style.border = "1px solid #fff";
    crs.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crs.style.scale = 1;
    crs.style.border = "0px solid #95c11e";
    crs.style.backgroundColor = "#95c11e";
  });
});
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -20%",
    end: "top -75%",
    scrub: 2,
  },
});
gsap.from("#about-us img,#about-us-in", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  },
});
gsap.from(".card", {
  scale: 0.9,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 40%",
    scrub: 4,
  },
});
// gsap.from("#colon1", {
//   y: -70,
//   x: -70,
//   scrollTrigger: {
//     trigger: "#colon1",
//     scroller: "body",
//     // markers:true,
//     start: "top 55%",
//     end: "top 45%",
//     scrub: 4,
//   },
// });
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    // markers: true,
    scroller: "body",
    start: "top 55%",
    end: "top 44%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 30,
  scrollTrigger: {
    trigger: "#page4 h1",
    // markers: true,
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});
