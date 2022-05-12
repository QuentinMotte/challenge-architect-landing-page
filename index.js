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
let arrayOne = [nav, first, second, three, four, five];
let arrayTwo = [six, seven, eight, nine, nineOne, nineTwo, ten];

arrayOne.forEach((item) => {
    document.addEventListener("DOMContentLoaded", () => {
        item.style.opacity = 1;
        item.style.transform = "translate(0)";
    });
});
console.log(arrayTwo);
arrayTwo.forEach((item) => {
    window.addEventListener("scroll", () => {
        let scrollValue =
            (window.scrollY + window.innerHeight) / document.body.offsetHeight;
        if (scrollValue > 0.3) {
            item.style.opacity = 1;
            item.style.transform = "none";
        }
    });
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
