var crs = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (delts) {
  crs.style.left = delts.x + "px";
  crs.style.top = delts.y + "px";
  blur.style.left = delts.x - 150 + "px";
  blur.style.top = delts.y - 150 + "px";
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
