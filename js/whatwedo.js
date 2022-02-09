const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: "top 50%",
    end: "bottom -20%",
    markers: false,
  })
})

