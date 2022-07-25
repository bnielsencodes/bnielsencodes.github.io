/* ----------------------------
todo: will be both css and js
add code to show error messages on contact form,
will also highlight empty input causing error

todo:



----------------------------- */

// note:

// System.debug

// console.log

// |DEBUG|

// attention:

// debug:


/* ------------------------------------
VARIABLES
------------------------------------ */

let $btn = document.getElementById("menu-toggle");
let $nav = document.getElementById("nav");
const htmlIcon = document.querySelector(".fa-html5");
const htmlIconP = document.querySelector(".html-icon-p");
const htmlLeftBorder = document.querySelector(".html-left-border");
const htmlMiddleBorder = document.querySelector(".html-middle-border");
const htmlRightBorder = document.querySelector(".html-right-border");
const vscodeSVG = document.querySelector(".vscode-svg");
const vscodePathOne = document.querySelector(".vscode-path-one");
const vscodePathTwo = document.querySelector(".vscode-path-two");
const vscodePathThree = document.querySelector(".vscode-path-three");
const vscodeIconP = document.querySelector(".vscode-icon-p");
const vscodeLeftBorder = document.querySelector(".vscode-left-border");
const vscodeMiddleBorder = document.querySelector(".vscode-middle-border");
const vscodeRightBorder = document.querySelector(".vscode-right-border");
const gitIcon = document.querySelector(".fa-git-alt");
const gitIconP = document.querySelector(".git-icon-p");
const gitLeftBorder = document.querySelector(".git-left-border");
const gitMiddleBorder = document.querySelector(".git-middle-border");
const gitRightBorder = document.querySelector(".git-right-border");
const cssLeftBorder = document.querySelector(".css-left-border");
const cssMiddleBorder = document.querySelector(".css-middle-border");
const cssRightBorder = document.querySelector(".css-right-border");
const cssIcon = document.querySelector(".fa-css3-alt");
const cssIconP = document.querySelector(".css-icon-p");
const sassIcon = document.querySelector(".fa-sass");
const sassIconP = document.querySelector(".sass-icon-p");
const sassLeftBorder = document.querySelector(".sass-left-border");
const sassMiddleBorder = document.querySelector(".sass-middle-border");
const sassRightBorder = document.querySelector(".sass-right-border");
const bootstrapIcon = document.querySelector(".fa-bootstrap");
const bootstrapIconP = document.querySelector(".bootstrap-icon-p");
const bootstrapLeftBorder = document.querySelector(".bootstrap-left-border");
const bootstrapMiddleBorder = document.querySelector(".bootstrap-middle-border");
const bootstrapRightBorder = document.querySelector(".bootstrap-right-border");
const tailwindSVG = document.querySelector(".tailwind-svg");
const tailwindSVGPath = document.querySelector(".tailwind-svg-path");
const tailwindIconP = document.querySelector(".tailwind-icon-p");
const tailwindLeftBorder = document.querySelector(".tailwind-left-border");
const tailwindMiddleBorder = document.querySelector(".tailwind-middle-border");
const tailwindRightBorder = document.querySelector(".tailwind-right-border");
const jsIcon = document.querySelector(".fa-js");
const jsIconP = document.querySelector(".js-icon-p");
const jsLeftBorder = document.querySelector(".js-left-border");
const jsMiddleBorder = document.querySelector(".js-middle-border");
const jsRightBorder = document.querySelector(".js-right-border");
const reactIcon = document.querySelector(".fa-react");
const reactIconP = document.querySelector(".react-icon-p");
const reactLeftBorder = document.querySelector(".react-left-border");
const reactMiddleBorder = document.querySelector(".react-middle-border");
const reactRightBorder = document.querySelector(".react-right-border");
const figmaIcon = document.querySelector(".fa-figma");
const figmaIconP = document.querySelector(".figma-icon-p");
const figmaLeftBorder = document.querySelector(".figma-left-border");
const figmaMiddleBorder = document.querySelector(".figma-middle-border");
const figmaRightBorder = document.querySelector(".figma-right-border");






const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('about-left-animation');
    }
  });
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.about-text-container'));




const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('about-right-animation');
    }
  });
});

// Tell the observer which elements to track
observer2.observe(document.querySelector('.about-skills-container'));



/* ------------------------------------
HAMBURGER MENU ANIMATION
------------------------------------ */

$btn.addEventListener("click", function () {
  $nav.classList.toggle("active");
});

/* ------------------------------------
SKILLS ICON MOUSEOVER ANIMATIONS
------------------------------------ */

// HTML ICON HOVER ANIMATION
htmlIconP.addEventListener("mouseover", () => {
  htmlIcon.classList.add("html-hover-color");
});

htmlIconP.addEventListener("mouseout", () => {
  htmlIcon.classList.remove("html-hover-color");
});

// VS CODE SVG HOVER ANIMATION
vscodeSVG.addEventListener("mouseover", () => {
  vscodeIconP.classList.add("vscode-p-hover-color");
  vscodePathOne.setAttribute("style", "fill: #0065A9");
  vscodePathTwo.setAttribute("style", "fill: #007ACC");
  vscodePathThree.setAttribute("style", "fill: #1F9CF0");
});

vscodeSVG.addEventListener("mouseout", () => {
  vscodeIconP.classList.remove("vscode-p-hover-color");
  vscodePathOne.setAttribute("style", "fill: #fafafa");
  vscodePathTwo.setAttribute("style", "fill: #fafafa");
  vscodePathThree.setAttribute("style", "fill: #fafafa");
});

vscodeIconP.addEventListener("mouseover", () => {
  vscodeIconP.classList.add("vscode-p-hover-color");
  vscodePathOne.setAttribute("style", "fill: #0065A9");
  vscodePathTwo.setAttribute("style", "fill: #007ACC");
  vscodePathThree.setAttribute("style", "fill: #1F9CF0");
});

vscodeIconP.addEventListener("mouseout", () => {
  vscodeIconP.classList.remove("vscode-p-hover-color");
  vscodePathOne.setAttribute("style", "fill: #fafafa");
  vscodePathTwo.setAttribute("style", "fill: #fafafa");
  vscodePathThree.setAttribute("style", "fill: #fafafa");
});

// GIT ICON HOVER ANIMATION
gitIconP.addEventListener("mouseover", () => {
  gitIcon.classList.add("git-hover-color");
});

gitIconP.addEventListener("mouseout", () => {
  gitIcon.classList.remove("git-hover-color");
});

// CSS ICON HOVER ANIMATION
cssIconP.addEventListener("mouseover", () => {
  cssIcon.classList.add("css-hover-color");
});

cssIconP.addEventListener("mouseout", () => {
  cssIcon.classList.remove("css-hover-color");
});

// SASS ICON HOVER ANIMATION
sassIconP.addEventListener("mouseover", () => {
  sassIcon.classList.add("sass-hover-color");
});

sassIconP.addEventListener("mouseout", () => {
  sassIcon.classList.remove("sass-hover-color");
});

// BOOTSTRAP ICON HOVER ANIMATION
bootstrapIconP.addEventListener("mouseover", () => {
  bootstrapIcon.classList.add("bootstrap-hover-color");
});

bootstrapIconP.addEventListener("mouseout", () => {
  bootstrapIcon.classList.remove("bootstrap-hover-color");
});

// TAILWIND SVG HOVER ANIMATION
tailwindSVG.addEventListener("mouseover", () => {
  tailwindIconP.classList.add("tailwind-p-hover-color");
  tailwindSVGPath.setAttribute("style", "fill: #36BDF9");
});

tailwindSVG.addEventListener("mouseout", () => {
  tailwindIconP.classList.remove("tailwind-p-hover-color");
  tailwindSVGPath.setAttribute("style", "fill: #fafafa");
});

tailwindIconP.addEventListener("mouseover", () => {
  tailwindIconP.classList.add("tailwind-p-hover-color");
  tailwindSVGPath.setAttribute("style", "fill: #36BDF9");
});

tailwindIconP.addEventListener("mouseout", () => {
  tailwindIconP.classList.remove("tailwind-p-hover-color");
  tailwindSVGPath.setAttribute("style", "fill: #fafafa");
});

// JAVASCRIPT ICON HOVER ANIMATION
jsIconP.addEventListener("mouseover", () => {
  jsIcon.classList.add("js-hover-color");
});

jsIconP.addEventListener("mouseout", () => {
  jsIcon.classList.remove("js-hover-color");
});

// REACT ICON HOVER ANIMATION
reactIconP.addEventListener("mouseover", () => {
  reactIcon.classList.add("react-hover-color");
});

reactIconP.addEventListener("mouseout", () => {
  reactIcon.classList.remove("react-hover-color");
});

// FIGMA ICON HOVER ANIMATION
figmaIconP.addEventListener("mouseover", () => {
  figmaIcon.classList.add("figma-hover-color");
});

figmaIconP.addEventListener("mouseout", () => {
  figmaIcon.classList.remove("figma-hover-color");
});