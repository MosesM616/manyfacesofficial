// פונקציה לפתיחת וסגירת התפריט
function toggleMenu() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

// פונקציה לסגור את התפריט בלחיצה מחוץ לו
document.addEventListener('click', function(event) {
  var navbar = document.querySelector('.navbar');
  var menu = document.querySelector('.mobile-menu');
  var hamburgerMenu = document.querySelector('.hamburger-menu');
  var closeMenuButton = document.querySelector('.close-menu');

  // אם הלחיצה היא לא על התפריט, כפתור ההמבורגר או כפתור ה-X, סגור את התפריט
  if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target) && !closeMenuButton.contains(event.target) && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
  }
});






// קוד JavaScript להחלפת התמונה ב-Modal על פי הקישור
document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(function(anchor) {
  anchor.addEventListener('click', function() {
    var imageUrl = this.getAttribute('data-bs-image');
    
    // מוודא שה-Modal נטען לפני עדכון ה-src
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imageUrl;
  });
});

document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(function(anchor) {
  anchor.addEventListener('click', function() {
    var imageUrl = this.getAttribute('data-bs-image');
    var modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageUrl;
    
    // אתחול ה-zoom
    var scale = 1;
    modalImage.addEventListener('wheel', function(event) {
      if (event.deltaY < 0) {
        // גלילה למעלה - הגדלה
        scale += 0.1;
      } else {
        // גלילה למטה - הקטנה
        scale -= 0.1;
      }
      modalImage.style.transform = "scale(" + scale + ")";
      event.preventDefault(); // מונע גלילה דפדפן
    });
  });
});

