// header layer

const headerContentImage = document.querySelector(".header__content-image")


window.addEventListener("mousemove", (e) => {


    const speed = +headerContentImage.getAttribute("data-speed")


    const X = (window.innerWidth - e.pageX) * speed / 100
    const Y = (window.innerHeight - e.pageY) * speed / 100


    headerContentImage.style.transform = `translate(${X}px, ${Y}px)`;
})

// header layer

// services cards

const servicesCard = document.querySelectorAll(".services__card")

for (let i = 0; i < servicesCard.length; i++) {
    servicesCard[i].addEventListener("mouseover", function () {
        this.classList.add("active")
    })
    servicesCard[i].addEventListener("mouseout", function () {
        this.classList.remove("active")
    })
}

// services cards

const bg4 = document.querySelector(".bg4")

window.addEventListener("mousemove", (e) => {


    const speed = +bg4.getAttribute("data-speed")


    const X = (window.innerWidth - e.pageX) * speed / 80
    const Y = (window.innerHeight - e.pageY) * speed / 80


    bg4.style.transform = `translate(${X}px, ${Y}px)`;
})













let blogDescLink = document.querySelector(".blog__desc-link")

let title = document.querySelector(".title")
let servicesTitle = document.querySelector(".services__title")
let DesignThingsDescLink = document.querySelector(".DesignThings__desc-link")
let teamworkDescLink = document.querySelector(".teamwork__desc-link")
let testimonialDescLink = document.querySelector(".testimonial__desc-link")

function fn(text, speed) {
    let txt = text.innerHTML
    text.innerHTML = ""

    function str(x = 0) {
        text.innerHTML += txt[x]
        x++

        if (x < txt.length) {
            setTimeout(() => {
                str(x)
            }, speed);
        }
    }

    str()
}

fn(title, 60)
fn(servicesTitle, 250)
fn(DesignThingsDescLink, 300)
fn(teamworkDescLink, 480)
fn(testimonialDescLink, 440)

const bloobs = document.querySelectorAll(".bloobs")

window.addEventListener("mousemove", (e) => {
    // console.log(e.pageX);
    for (let a = 0; a < bloobs.length; a++) {

        const speed = +bloobs[a].getAttribute("data-speed")

        const x = (window.innerWidth - e.pageX) * speed / 30
        // console.log(x);
        const y = (window.innerHeight - e.pageY) * speed / 30

        bloobs[a].style.transform = `translate(${x}px, ${y}px)`;
    }
})



// fade-right

let DesignThings = document.querySelector(".DesignThings")
let teamwork = document.querySelector(".teamwork")
let testimonial = document.querySelector(".testimonial")
let logotips = document.querySelector(".logotips")

window.addEventListener("scroll", () => {
    fadeAnim(DesignThings, "right")
    fadeAnim(DesignThings, "left")
    fadeAnim(teamwork, "right")
    fadeAnim(teamwork, "left")
    fadeAnim(testimonial, "right")
    fadeAnim(testimonial, "left")
    fadeAnim(logotips, "right")
    fadeAnim(logotips, "left")
    fadeAnim(logotips, "bottom")
    fadeAnim(logotips, "top")
})

function fadeAnim(section, dirAnim) {
    let faderight = section.querySelectorAll(".fade-right")
    let fadeleft = section.querySelectorAll(".fade-left")
    let fadetop = section.querySelectorAll(".fade-top")
    let fadebottom = section.querySelectorAll(".fade-bottom")

    if (dirAnim == "right") {
        faderight.forEach(faderights => {
            if (window.scrollY >= section.offsetTop) {
                faderights.classList.add("active")
            } else {
                faderights.classList.remove("active")
            }
        });
    } else if (dirAnim == "left") {
        fadeleft.forEach(fadelefts => {
            if (window.scrollY >= section.offsetTop) {
                fadelefts.classList.add("active")
            } else {
                fadelefts.classList.remove("active")
            }
        });
    } else if (dirAnim == "top") {
        fadetop.forEach(fadetops => {
            if (window.scrollY >= section.offsetTop) {
                fadetops.classList.add("active")
            } else {
                fadetops.classList.remove("active")
            }
        });
    } else if (dirAnim == "bottom") {
        fadebottom.forEach(fadebottoms => {
            if (window.scrollY >= section.offsetTop) {
                fadebottoms.classList.add("active")
            }
            else {
                fadebottoms.classList.remove("active")
            }
        });
    }
}

// fade-right
// fade-left

// function fadeleft(left) {
//     let fadeleft = left.querySelectorAll(".fade-left")

//     // console.log(left);

//     fadeleft.forEach(fadelefts => {
//         if (window.scrollY >= left.offsetTop) {
//             fadelefts.classList.add("active")
//         } else {
//             fadelefts.classList.remove("active")
//         }
//     });
// }

// fade-left
// fade-top


// fade-top

// fade-bottom


// fade-bottom


// burger

let burger = document.querySelector(".nav__burger")
let menu = document.querySelector(".nav__menu")

burger.addEventListener("click", function () {
    menu.classList.toggle("active")
    // if (menu.style.transform = `scale(${0})`) {
    //     menu.style.transform = `scale(${1})`
    //     if (menu.style.transform = `scale(${1})`) {
    //         menu.style.transform = `scale(${0})`
    //     }
    // }
})

// burger