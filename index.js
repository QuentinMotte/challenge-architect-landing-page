const nav = document.querySelector(".top-header");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const three = document.querySelector(".three");
const four = document.querySelector(".one");
const five = document.querySelector(".two");
const six = document.querySelector(".second-part-img img");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const nineOne = document.querySelector(".nine-one");
const nineTwo = document.querySelector(".nine-two");
const ten = document.querySelector(".resume-number");
const eleven = document.querySelector(".third-part-text");
const twelve = document.querySelector(".third-part-img");
const thirteen = document.querySelector(".four-part-img");
const fourteen = document.querySelector(".four-part-sponsor");
const fifteen = document.querySelector(".five-part");
console.log(six);
document.addEventListener("DOMContentLoaded", () => {
    nav.style.opacity = 1;
    nav.style.transform = "translate(0)";
    first.style.opacity = 1;
    first.style.transform = "translate(0)";
    second.style.opacity = 1;
    second.style.transform = "translate(0)";
    three.style.opacity = 1;
    three.style.transform = "translate(0)";
    four.style.opacity = 1;
    four.style.transform = "translate(0)";
    five.style.opacity = 1;
    five.style.transform = "translate(0)";
});

window.addEventListener("scroll", () => {
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);
    if (scrollValue > 0.3) {
        six.style.opacity = 1;
        six.style.transform = "none";
        seven.style.opacity = 1;
        seven.style.transform = "translate(0)";
        eight.style.opacity = 1;
        eight.style.transform = "translate(0)";
        nine.style.opacity = 1;
        nine.style.transform = "translate(0)";
        nineOne.style.opacity = 1;
        nineOne.style.transform = "translate(0)";
        nineTwo.style.opacity = 1;
        nineTwo.style.transform = "translate(0)";
        ten.style.opacity = 1;
        ten.style.transform = "translate(0)";
    }
});
window.addEventListener("scroll", () => {
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);
    if (scrollValue > 0.47) {
        eleven.style.opacity = 1;
        eleven.style.transform = "translate(0)";
        twelve.style.opacity = 1;
        twelve.style.transform = "translate(0)";
    }
});
window.addEventListener("scroll", () => {
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);
    if (scrollValue > 0.57) {
        thirteen.style.opacity = 1;
        thirteen.style.transform = "translate(0)";
    }
});
window.addEventListener("scroll", () => {
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);
    if (scrollValue > 0.67) {
        fourteen.style.opacity = 1;
        fourteen.style.transform = "translate(0)";
    }
});
window.addEventListener("scroll", () => {
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    console.log(scrollValue);
    if (scrollValue > 0.8) {
        fifteen.style.opacity = 1;
        fifteen.style.transform = "translate(0)";
    }
});
