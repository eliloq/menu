// Horizontal menu

let submenu1 = document.querySelector(
  "div.wrapper>div.horz-menu>nav>ul>li:nth-of-type(1)>a"
);
let submenu2 = document.querySelector(
  "div.wrapper>div.horz-menu>nav>ul>li:nth-of-type(2)>a"
);
let submenu3 = document.querySelector(
  "div.wrapper>div.horz-menu>nav>ul>li:nth-of-type(3)>a"
);

// first
submenu1.addEventListener("mouseenter", function (e) {
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = "block";
  }
  if (e.target.previousElementSibling) {
    e.target.previousElementSibling.style.display = "block";
  }
});
submenu1.addEventListener("mouseleave", function (e) {
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = "none";
  }
  if (e.target.previousElementSibling) {
    e.target.previousElementSibling.style.display = "none";
  }
});

// second
submenu2.addEventListener("mouseenter", function (e) {
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = "block";
  }
  if (e.target.previousElementSibling) {
    e.target.previousElementSibling.style.display = "block";
  }
});
submenu2.addEventListener("mouseleave", function (e) {
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = "none";
  }
  if (e.target.previousElementSibling) {
    e.target.previousElementSibling.style.display = "none";
  }
});

// third
submenu3.addEventListener("mouseenter", function (e) {
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = "block";
  }
  if (e.target.previousElementSibling) {
    e.target.previousElementSibling.style.display = "block";
  }
});
submenu3.addEventListener("mouseleave", function (e) {
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = "none";
  }
  if (e.target.previousElementSibling) {
    e.target.previousElementSibling.style.display = "none";
  }
});

// Vertical menu
let icon = document.querySelector("div.wrapper>div.vert-menu>div.icon");

let submenu = document.querySelector(
  "div.wrapper>div.vert-menu>div.icon>div.s-menu"
);

let closeBtn = document.querySelector(
  "div.wrapper>div.vert-menu>div.icon>i.fa-times"
);

let menuBtn = document.querySelector(
  "div.wrapper>div.vert-menu>div.icon>i.fa-bars"
);

flag = true;
icon.addEventListener("click", function () {
  if (flag) {
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
    submenu.style.display = "block";
    flag = false;
  }
  else {
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    submenu.style.display = "none";
    flag = true;
  }
});
