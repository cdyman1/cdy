gsap.config ({
  nullTargetWarn : false,
  trialWarn: false
})

gsap.to(".phil_text01", {
  x: "130vw",
  transformOrigin: "center center",
  scrollTrigger: {
    trigger: ".phil_text02",
    start: "top 62%",
    end: "bottom top-=200",
    scrub: 2
  }
});

gsap.to(".phil_text02", {
  x: "-130vw",
  transformOrigin: "center center",
  scrollTrigger: {
  marker: 'true',
    trigger: ".phil_text02",
    start: "top 62%",
    end: "bottom top-=200",
    scrub: 2
  }
});