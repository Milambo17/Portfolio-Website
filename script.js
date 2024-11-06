/*const header = document.querySelector("header");
const sections = document.querySelectorAll(".section");
const content = document.querySelector(".all-content");
const Nav = document.querySelectorAll(".nav-btn");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

Nav.forEach((navi) => {
  navi.addEventListener("click", function () {
    Nav.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});


  content.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id){
      Nav.forEach(tap) => {
        tap.classList.remove('active')
      }
      e.target.classList.add('active')

    sections.forEach(section)=> {
      section.classList.remove('active')
    }
    const element = document.getElementById(id);
    element.classList.add('active')
    }
  });
*/
(function () {
  [...document.querySelectorAll(".nav-btn")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active").classList.remove("active");
      this.classList.add("active");
    });
  });
  /*document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  })*/
})();
(function () {
  [...document.querySelectorAll(".section")].forEach((sec) => {
    sec.addEventListener("click", function () {
      document.querySelector(".active-sec").classList.remove("active-sec");

      document.getElementById(button.dataset.id).classList.add("active-sec");
    });
  });
});

const header = document.querySelector("header");
const sections = document.querySelectorAll(".section");
const content = document.querySelector(".all-content");
const navBtns = document.querySelectorAll(".navlist");

function secTransitions() {
  content.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      navBtns.forEach((btn) => {
        btn.classList.remove("active-sec");
      });
      e.target.classList.add("active-sec");

      sections.forEach((section) => {
        section.classList.remove("active-sec");
      });
      const ace = document.getElementById(id);
      ace.classList.add("active-sec");
    }
  });
}
secTransitions();
