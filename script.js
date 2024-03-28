gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".wrapper section");
let timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
    }
});

timeLine.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
}).to(".x2", {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    ease: "none",
})
