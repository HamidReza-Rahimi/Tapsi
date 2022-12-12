const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});

const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordion = document.querySelector(".accordion");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});

// const accordionHeaders = document.querySelector(".accordion__header");
// const accordion = document.querySelector(".accordion");
// accordionHeaders.addEventListener("click", (e) => {
//   accordion.classList.toggle("accordion__expanded");
// });

const moreMenusCall = document.querySelector("#more-menu-call");
const navBar = document.querySelector(".nav");
moreMenusCall.addEventListener("click", (e) => {
  navBar.classList.toggle("more-menu-call__expanded");
});

const moreMenusDrivers = document.querySelector("#more-menu-drivers");
const nav = document.querySelector(".nav");
moreMenusDrivers.addEventListener("click", (e) => {
  nav.classList.toggle("more-menu-drivers__expanded");
});


