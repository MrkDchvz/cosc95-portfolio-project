gsap.registerPlugin(ScrollTrigger);

const timelineList = document.querySelectorAll(".timeline-animation");

timelineList.forEach((t) => {
  gsap.from(t, {
    scrollTrigger: {
      trigger: t,
      start: "top 20%",
      end: "top 10%",
      scrub: true,
      markers: false,
    },
    opacity: 0,
    y: -100,
  });
});
