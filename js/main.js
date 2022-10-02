/* ----------------------------
TODO: will be both css and js
add code to show error messages on contact form,
will also highlight empty input causing error

TODO: change figma skill to node.js

/* ------------------------------------
VARIABLES
------------------------------------ */

let $nav = document.getElementById("hamburger-nav");

/* ------------------------------------
---------------------------------------
HAMBURGER MENU ANIMATION
---------------------------------------
------------------------------------ */

const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  $nav.classList.toggle("active");
});

/* ------------------------------------
---------------------------------------
COPY EMAIL TO CLIPBOARD AND DISABLE MAILTO: LINK

taken from https://codepen.io/imjuangarcia/pen/xxRaqMZ
---------------------------------------
------------------------------------ */

// Select the button from the markup
const button = document.querySelector(".click-to-copy");

// Function that runs on click. It:
// 1) Prevents the default behavior of the button (refresh the page);
// 2) Runs the copyToClipboard function;
// 3) Adds and removes some CSS classes, used for styling and notifying the user about the copy event
const clickToCopy = (e) => {
  e.preventDefault();
  copyToClipboard(e.currentTarget.textContent);
  e.target.classList.add("is-copied");
  setTimeout(() => {
    e.target.classList.remove("is-copied");
  }, 1200);
};

// Copy to clipboard function, taken from https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript/
const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

// Fire the event on click
button.addEventListener("click", clickToCopy);
