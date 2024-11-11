function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger-menu');
  navbar.classList.toggle('active'); // מוסיף/מוסר את הקלאס 'active' מה-navbar
  hamburger.classList.toggle('open'); // מוסיף/מוסר את הקלאס 'open' מכפתור ההמבורגר
}

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger-menu");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", function() {
    menu.classList.toggle("mobile");
  });
});