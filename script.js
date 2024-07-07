var crs = document.querySelector("#cursor"); //querySelector-select html element in js
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (place) {
  //console.log(place);     trackmouse in console
  crs.style.left = place.x + "px";
  crs.style.top = place.y + "px";
  blur.style.left = place.x - 150 + "px";
  blur.style.top = place.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "black",
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
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
