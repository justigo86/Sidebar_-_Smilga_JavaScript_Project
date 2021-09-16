const closeMenu = document.querySelector(".close-btn");
const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const links = document.querySelector(".links");

const toggleMenu = () => {
    sidebar.classList.toggle("show-sidebar");
}

closeMenu.addEventListener("click", toggleMenu);
toggle.addEventListener("click", toggleMenu);

// closeBtn.addEventListener("click", function () {
//     sidebar.classList.remove("show-sidebar");
//   });