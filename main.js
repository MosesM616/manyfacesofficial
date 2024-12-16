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

  // אם התפריט פתוח, והקליק היה מחוץ לתפריט, נסגור אותו
  if (navbar.classList.contains('active') && 
      !menu.contains(event.target) && 
      !hamburgerMenu.contains(event.target) && 
      !closeMenuButton.contains(event.target) && 
      !event.target.closest('.navbar')) {
    navbar.classList.remove('active');
  }
});

// פונקציה לפתיחת וסגירת תפריט "The Band" ו-"Media" במובייל
document.querySelectorAll('.mobile-menu .theband > a, .mobile-menu .media > a').forEach(function(menuItem) {
  menuItem.addEventListener('click', function(event) {
    var parent = this.parentElement;
    var dropdownContent = parent.querySelector('.dropdown');
    
    // אם המיני תפריט פתוח, נסגור אותו. אם סגור, נפתח אותו.
    var isOpen = dropdownContent.style.display === "block";
    closeAllMobileDropdowns(); // סוגר את כל המיני-תפריטים לפני פתיחת הנוכחי

    // אם המיני תפריט לא היה פתוח, נפתח אותו
    if (!isOpen) {
      dropdownContent.style.display = "block";
    }

    event.stopPropagation(); // מונע מהקליק להפעיל את סגירת התפריט הראשי
  });
});

// פונקציה לסגור את כל המיני-תפריטים במובייל
function closeAllMobileDropdowns() {
  document.querySelectorAll('.mobile-menu .dropdown').forEach(function(dropdownContent) {
    dropdownContent.style.display = "none";
  });
}

// פונקציה לסגור את כל המיני-תפריטים בלחיצה מחוץ להם
document.addEventListener('click', function(event) {
  var dropdowns = document.querySelectorAll('.mobile-menu .dropdown');
  
  // עבור כל מיני תפריט, אם הקליק היה מחוץ לו, נסגור אותו
  dropdowns.forEach(function(dropdownContent) {
    if (!dropdownContent.contains(event.target) && !event.target.closest('.theband') && !event.target.closest('.media')) {
      dropdownContent.style.display = "none";
    }
  });
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

// זום על התמונה במודל
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

// משתנה לבדיקת אם הפופ-אפ כבר הוצג
let popupOpened = localStorage.getItem('popupOpened') === 'true';  // בודק אם הפופ-אפ הוצג בעבר

// הצגת הפופ-אפ אם לא הוצג כבר
window.onload = function() {
  if (!popupOpened) {
    setTimeout(function() {
      document.getElementById("popup").style.display = "flex";
      localStorage.setItem('popupOpened', 'true'); // שומר שזו הפעם הראשונה שהפופ-אפ מוצג
    }, 2000); // מחכה 2 שניות לפני הצגת הפופ-אפ
  }
}

// פונקציה לסגירת הפופ-אפ
function closePopup() {
  document.getElementById("popup").style.display = "none";
  // שומר ב-localStorage שהפופ-אפ נסגר כדי למנוע ממנו להיפתח שוב
  localStorage.setItem('popupOpened', 'true');
}

