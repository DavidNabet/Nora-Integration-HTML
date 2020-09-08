//header
const header = document.querySelector('#header');

//banner
const slideBg = document.querySelector("#slideBg");

//content
const h1Line = document.querySelectorAll('.line span');
const contentP = document.querySelector('.content-inner p');
const playVideo = document.querySelector('.play-video');
const playVideoCover = document.querySelector('.play-video .cover');

//pagination
const paginationDots = document.querySelector(".pagination .dots");

const bannerTL = gsap.timeline();

bannerTL
.from(header, {
    delay: -0.2,
    y: 16,
    opacity: 0,
    duration: 1,
    ease: 'power3.inOut'
}).from(h1Line, {
    delay: -0.6,
    y: 80,
    duration: 1,
    ease: 'power3.out',
    stagger: {
        amount: 0.2
    }
}).from([contentP, playVideo], {
    delay: -0.6,
    y: -40,
    duration: .8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
        amount: .2
    }
})