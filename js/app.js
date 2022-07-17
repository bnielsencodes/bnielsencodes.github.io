// todo:

// note:

// System.debug

// console.log

// |DEBUG|

// attention:

// debug:

/* ------------------------------------
HAMBURGER MENU ANIMATION
------------------------------------ */

var $btn = document.getElementById("menu-toggle");
var $nav = document.getElementById("nav");

$btn.addEventListener("click", function () {
  $nav.classList.toggle("active");
});
