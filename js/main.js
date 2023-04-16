/* ----------------------------
TODO: will be both css and js
add code to show error messages on contact form,
will also highlight empty input causing error

TODO: change figma skill to node.js

/* ------------------------------------
VARIABLES
------------------------------------ */

let $nav = document.getElementById("mobile-nav");

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
COPY EMAIL
---------------------------------------
------------------------------------ */

const emailAddress = document.getElementById("email");
const copyBtn = document.querySelector(".copy-email__btn");
const copyText = document.querySelector(".copied-msg");

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
MAKE COPIED TEXT DISAPPEAR AFTER TWO SECONDS
------------------------------------ */

  setTimeout(() => {
    const copied = document.querySelector(".copied-msg");

    // 👇️ removes element from DOM
    copied.classList.add("hidden");

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 2000); // 👈️ time in milliseconds
});

// PROJECT TEXT OVERLAY
const projectOverlay = document.querySelector(".overlay");

function flipCard() {
  const projectImgId = document.getElementById("project-img-id");
  console.log(projectImgId.classList);
  const projectImgContainer = document.querySelector(".project-img-container");
  console.log(projectImgContainer.classList);
  const mdDesc = document.querySelector(".md-description");
  console.log(mdDesc.classList);
  const projectImg = document.querySelectorAll(".project-img");
  console.log(projectImg.classList);
}
