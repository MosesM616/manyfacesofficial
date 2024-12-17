// פונקציה לפתיחת וסגירת התפריט
function toggleMenu() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

// פונקציה לפתיחת וסגירת תפריט "The Band" ו-"Media" במובייל
document.querySelectorAll('.mobile-menu .theband > a, .mobile-menu .media > a').forEach(function(menuItem) {
  menuItem.addEventListener('click', function(event) {
    var parent = this.parentElement;
    var dropdownContent = parent.querySelector('.dropdown');
    
    var isOpen = dropdownContent.style.display === "block";
    closeAllMobileDropdowns();

    if (!isOpen) {
      dropdownContent.style.display = "block";
    }

    event.stopPropagation();
  });
});

// פונקציה לסגור את כל המיני-תפריטים במובייל
function closeAllMobileDropdowns() {
  document.querySelectorAll('.mobile-menu .dropdown').forEach(function(dropdownContent) {
    dropdownContent.style.display = "none";
  });
}

// קוד להצגת הפופ-אפ
let popupOpened = localStorage.getItem('popupOpened') === 'true';

window.onload = function() {
  if (!popupOpened) {
    setTimeout(function() {
      document.getElementById("popup").style.display = "flex";
      localStorage.setItem('popupOpened', 'true');
    }, 2000);
  }
}

// פונקציה לסגירת הפופ-אפ
function closePopup() {
  document.getElementById("popup").style.display = "none";
  localStorage.setItem('popupOpened', 'true');
}

// קוד של חץ הגלילה למעלה
const scrollToTopButton = document.getElementById("scrollToTop");

// ודא שאתה טוען את הסקריפט על כל הדפים.
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.getElementById("scrollToTop");

  // אם אלמנט החץ לא קיים בדף (אם במקרה הוא חסר),
  // אז לא נטפל בו ונעצור את פונקציות הגלילה.
  if (!scrollToTopButton) return;

  // מאזין לגלילת העמוד
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // כאשר גללנו יותר מ-300 פיקסלים
      scrollToTopButton.classList.add("show"); // הצג את החץ
    } else {
      scrollToTopButton.classList.remove("show"); // הסתר את החץ
    }
  });

  // אירוע לחיצה על החץ
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0, // גלילה לראש העמוד
      behavior: "smooth" // מעבר חלק
    });
  });
});