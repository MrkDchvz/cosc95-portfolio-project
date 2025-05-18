gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 50%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
    duration: 0.1,
  });
});

const projectList = document.querySelectorAll(".project-animation");

// Used this variable to alternate the animation on the project card
let n = 100;

projectList.forEach((t) => {
  gsap.from(t, {
    scrollTrigger: {
      trigger: t,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
      markers: false,
    },
    opacity: 0,
    x: n,
  });
  n *= -1;
});
