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
Copy Password
---------------------------------------
------------------------------------ */

const emailAddress = document.getElementById("email-address");
const copyBtn = document.querySelector(".click-to-copy");
const copyText = document.querySelector(".copied");

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const textArea = document.createElement("textarea");
  const emailToCopy = emailAddress.innerHTML;

  // Edge Case when Password is Empty
  if (!emailToCopy) return;

  // Copy Functionality
  textArea.value = emailToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  copyText.classList.remove("hidden");

  /* ------------------------------------
MAKE COPIED TEXT DISAPPEAR AFTER  SECONDS
------------------------------------ */

  setTimeout(() => {
    const copied = document.querySelector(".copied");

    // 👇️ removes element from DOM
    copied.classList.add("hidden");

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 2000); // 👈️ time in milliseconds
});

//
//
//
//
//
//
//
