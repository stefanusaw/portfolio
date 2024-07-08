// // Nav hamburgerburger selections
// const burger = document.querySelector("#burger-menu");
// const ul = document.querySelector("nav ul");
// const nav = document.querySelector("nav");

// // Scroll to top selection
// const scrollUp = document.querySelector("#scroll-up");

// // Select nav links
// const navLink = document.querySelectorAll(".nav-link");

// // Hamburger menu function
// burger.addEventListener("click", () => {
//   ul.classList.toggle("show");
// });

// // Close hamburger menu when a link is clicked
// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     ul.classList.remove("show");
//   })
// );

// // scroll to top functionality
// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  // Nav hamburger selections
  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  const nav = document.querySelector("nav");

  // Scroll to top selection
  // const scrollUp = document.querySelector("#scroll-up");

  // Select nav links
  const navLink = document.querySelectorAll(".nav-link");
  ul.classList.remove("show");

  // Hamburger menu function
  burger.addEventListener("click", () => {
    // console.log("Clicked burger menu");
    ul.classList.toggle("show");
  });



  // Close hamburger menu when a link is clicked
  // navLink.forEach((link) =>
  //   link.addEventListener("click", () => {
  //     ul.classList.remove("show");
  //   })
  // );

  // Scroll to top functionality
  // scrollUp.addEventListener("click", () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // });
});
