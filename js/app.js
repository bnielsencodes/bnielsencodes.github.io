/* ----------------------------
todo: will be both css and js
add code to show error messages on contact form,
will also highlight empty input causing error

todo: add a headline to skills section

todo: change figma skill to node.js

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
const bootstrapMiddleBorder = document.querySelector(
  ".bootstrap-middle-border"
);
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

/* ------------------------------------
---------------------------------------
TRIGGER ABOUT SECTION ANIMATIONS ON SCROLL EVENT
---------------------------------------
------------------------------------ */

// ANIMATE .ABOUT-TEXT-CONTAINER
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("about-left-animation");
    }
  });
});

// Tell the observer which elements to track
observer.observe(document.querySelector(".about-text-container"));

// ANIMATE .ABOUT-SKILLS-CONTAINER
const observer2 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("about-right-animation");
    }
  });
});

// Tell the observer which elements to track
observer2.observe(document.querySelector(".about-right"));

/* ------------------------------------
---------------------------------------
HAMBURGER MENU ANIMATION
---------------------------------------
------------------------------------ */

$btn.addEventListener("click", function () {
  $nav.classList.toggle("active");
});

/* ------------------------------------
---------------------------------------
tsPARTICALS FOR HERO BACKGROUND ANIMATION
---------------------------------------
------------------------------------ */

tsParticles.load("tsparticles", {
  fps_limit: 60,
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
      onhover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 100,
        duration: 2,
        opacity: 0,
        size: 0,
        speed: 3,
      },
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 24,
      },
      remove: {
        particles_nb: 2,
      },
      repulse: {
        distance: 80,
        speed: 0.03,
        duration: 30,
      },
    },
  },
  particles: {
    color: {
      value: [
        "#785af0",
        "#785af0",
        "#785af0",
        "#785af0",
        "#785af0",
        "#785af0",
        "#785af0",
        "#785af0",
        "#785af0",
        "#785af0",
        "#2cb67d",
      ],
    },
    move: {
      size: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: true,
      speed: 0.8,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1500,
      },
      value: 250,
    },
    opacity: {
      anim: {
        enable: true,
        opacity_min: 0,
        speed: 1.1,
        sync: false,
      },
      random: true,
      value: 1,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100,
      },
      polygon: {
        nb_sides: 5,
      },
      stroke: {
        color: "#000000",
        width: 0,
      },
      type: "circle",
    },
    size: {
      anim: {
        enable: false,
        size_min: 0.3,
        speed: 4,
        sync: false,
      },
      random: true,
      value: 3,
    },
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "#ffffff",
      lineWidth: 0.5,
    },
    move: {
      radius: 10,
    },
    scale: 1,
    type: "none",
    url: "",
  },
  retina_detect: true,
});

/* ------------------------------------
---------------------------------------
SKILLS ICON MOUSEOVER ANIMATIONS
---------------------------------------
------------------------------------ */

// HTML ICON HOVER ANIMATION
htmlIconP.addEventListener("mouseover", () => {
  htmlIcon.classList.add("html-hover-color");
  htmlLeftBorder.classList.add("html-hex-border-left");
  htmlMiddleBorder.classList.add("html-hex-bg-color");
  htmlRightBorder.classList.add("html-hex-border-right");
});

htmlIconP.addEventListener("mouseout", () => {
  htmlIcon.classList.remove("html-hover-color");
  htmlLeftBorder.classList.remove("html-hex-border-left");
  htmlMiddleBorder.classList.remove("html-hex-bg-color");
  htmlRightBorder.classList.remove("html-hex-border-right");
});

htmlIcon.addEventListener("mouseover", () => {
  htmlIconP.classList.add("html-hover-color");
  htmlLeftBorder.classList.add("html-hex-border-left");
  htmlMiddleBorder.classList.add("html-hex-bg-color");
  htmlRightBorder.classList.add("html-hex-border-right");
});

htmlIcon.addEventListener("mouseout", () => {
  htmlIconP.classList.remove("html-hover-color");
  htmlLeftBorder.classList.remove("html-hex-border-left");
  htmlMiddleBorder.classList.remove("html-hex-bg-color");
  htmlRightBorder.classList.remove("html-hex-border-right");
});

// VS CODE SVG HOVER ANIMATION
vscodeSVG.addEventListener("mouseover", () => {
  vscodeIconP.classList.add("vscode-p-hover-color");
  vscodeLeftBorder.classList.add("vscode-hex-border-left");
  vscodeMiddleBorder.classList.add("vscode-hex-bg-color");
  vscodeRightBorder.classList.add("vscode-hex-border-right");
  vscodePathOne.setAttribute("style", "fill: #0065A9");
  vscodePathTwo.setAttribute("style", "fill: #007ACC");
  vscodePathThree.setAttribute("style", "fill: #1F9CF0");
});

vscodeSVG.addEventListener("mouseout", () => {
  vscodeIconP.classList.remove("vscode-p-hover-color");
  vscodeLeftBorder.classList.remove("vscode-hex-border-left");
  vscodeMiddleBorder.classList.remove("vscode-hex-bg-color");
  vscodeRightBorder.classList.remove("vscode-hex-border-right");
  vscodePathOne.setAttribute("style", "fill: #fafafa");
  vscodePathTwo.setAttribute("style", "fill: #fafafa");
  vscodePathThree.setAttribute("style", "fill: #fafafa");
});

vscodeIconP.addEventListener("mouseover", () => {
  vscodeIconP.classList.add("vscode-p-hover-color");
  vscodeLeftBorder.classList.add("vscode-hex-border-left");
  vscodeMiddleBorder.classList.add("vscode-hex-bg-color");
  vscodeRightBorder.classList.add("vscode-hex-border-right");
  vscodePathOne.setAttribute("style", "fill: #0065A9");
  vscodePathTwo.setAttribute("style", "fill: #007ACC");
  vscodePathThree.setAttribute("style", "fill: #1F9CF0");
});

vscodeIconP.addEventListener("mouseout", () => {
  vscodeIconP.classList.remove("vscode-p-hover-color");
  vscodeLeftBorder.classList.remove("vscode-hex-border-left");
  vscodeMiddleBorder.classList.remove("vscode-hex-bg-color");
  vscodeRightBorder.classList.remove("vscode-hex-border-right");
  vscodePathOne.setAttribute("style", "fill: #fafafa");
  vscodePathTwo.setAttribute("style", "fill: #fafafa");
  vscodePathThree.setAttribute("style", "fill: #fafafa");
});

// GIT ICON HOVER ANIMATION
gitIconP.addEventListener("mouseover", () => {
  gitIcon.classList.add("git-hover-color");
  gitLeftBorder.classList.add("git-hex-border-left");
  gitMiddleBorder.classList.add("git-hex-bg-color");
  gitRightBorder.classList.add("git-hex-border-right");
});

gitIconP.addEventListener("mouseout", () => {
  gitIcon.classList.remove("git-hover-color");
  gitLeftBorder.classList.remove("git-hex-border-left");
  gitMiddleBorder.classList.remove("git-hex-bg-color");
  gitRightBorder.classList.remove("git-hex-border-right");
});

gitIcon.addEventListener("mouseover", () => {
  gitIconP.classList.add("git-hover-color");
  gitLeftBorder.classList.add("git-hex-border-left");
  gitMiddleBorder.classList.add("git-hex-bg-color");
  gitRightBorder.classList.add("git-hex-border-right");
});

gitIcon.addEventListener("mouseout", () => {
  gitIconP.classList.remove("git-hover-color");
  gitLeftBorder.classList.remove("git-hex-border-left");
  gitMiddleBorder.classList.remove("git-hex-bg-color");
  gitRightBorder.classList.remove("git-hex-border-right");
});

// CSS ICON HOVER ANIMATION
cssIconP.addEventListener("mouseover", () => {
  cssIcon.classList.add("css-hover-color");
  cssLeftBorder.classList.add("css-hex-border-left");
  cssMiddleBorder.classList.add("css-hex-bg-color");
  cssRightBorder.classList.add("css-hex-border-right");
});

cssIconP.addEventListener("mouseout", () => {
  cssIcon.classList.remove("css-hover-color");
  cssLeftBorder.classList.remove("css-hex-border-left");
  cssMiddleBorder.classList.remove("css-hex-bg-color");
  cssRightBorder.classList.remove("css-hex-border-right");
});

cssIcon.addEventListener("mouseover", () => {
  cssIconP.classList.add("css-hover-color");
  cssLeftBorder.classList.add("css-hex-border-left");
  cssMiddleBorder.classList.add("css-hex-bg-color");
  cssRightBorder.classList.add("css-hex-border-right");
});

cssIcon.addEventListener("mouseout", () => {
  cssIconP.classList.remove("css-hover-color");
  cssLeftBorder.classList.remove("css-hex-border-left");
  cssMiddleBorder.classList.remove("css-hex-bg-color");
  cssRightBorder.classList.remove("css-hex-border-right");
});

// SASS ICON HOVER ANIMATION
sassIconP.addEventListener("mouseover", () => {
  sassIcon.classList.add("sass-hover-color");
  sassLeftBorder.classList.add("sass-hex-border-left");
  sassMiddleBorder.classList.add("sass-hex-bg-color");
  sassRightBorder.classList.add("sass-hex-border-right");
});

sassIconP.addEventListener("mouseout", () => {
  sassIcon.classList.remove("sass-hover-color");
  sassLeftBorder.classList.remove("sass-hex-border-left");
  sassMiddleBorder.classList.remove("sass-hex-bg-color");
  sassRightBorder.classList.remove("sass-hex-border-right");
});

sassIcon.addEventListener("mouseover", () => {
  sassIconP.classList.add("sass-hover-color");
  sassLeftBorder.classList.add("sass-hex-border-left");
  sassMiddleBorder.classList.add("sass-hex-bg-color");
  sassRightBorder.classList.add("sass-hex-border-right");
});

sassIcon.addEventListener("mouseout", () => {
  sassIconP.classList.remove("sass-hover-color");
  sassLeftBorder.classList.remove("sass-hex-border-left");
  sassMiddleBorder.classList.remove("sass-hex-bg-color");
  sassRightBorder.classList.remove("sass-hex-border-right");
});

// BOOTSTRAP ICON HOVER ANIMATION
bootstrapIconP.addEventListener("mouseover", () => {
  bootstrapIcon.classList.add("bootstrap-hover-color");
  bootstrapLeftBorder.classList.add("bootstrap-hex-border-left");
  bootstrapMiddleBorder.classList.add("bootstrap-hex-bg-color");
  bootstrapRightBorder.classList.add("bootstrap-hex-border-right");
});

bootstrapIconP.addEventListener("mouseout", () => {
  bootstrapIcon.classList.remove("bootstrap-hover-color");
  bootstrapLeftBorder.classList.remove("bootstrap-hex-border-left");
  bootstrapMiddleBorder.classList.remove("bootstrap-hex-bg-color");
  bootstrapRightBorder.classList.remove("bootstrap-hex-border-right");
});

bootstrapIcon.addEventListener("mouseover", () => {
  bootstrapIconP.classList.add("bootstrap-hover-color");
  bootstrapLeftBorder.classList.add("bootstrap-hex-border-left");
  bootstrapMiddleBorder.classList.add("bootstrap-hex-bg-color");
  bootstrapRightBorder.classList.add("bootstrap-hex-border-right");
});

bootstrapIcon.addEventListener("mouseout", () => {
  bootstrapIconP.classList.remove("bootstrap-hover-color");
  bootstrapLeftBorder.classList.remove("bootstrap-hex-border-left");
  bootstrapMiddleBorder.classList.remove("bootstrap-hex-bg-color");
  bootstrapRightBorder.classList.remove("bootstrap-hex-border-right");
});

// TAILWIND SVG HOVER ANIMATION
tailwindSVG.addEventListener("mouseover", () => {
  tailwindIconP.classList.add("tailwind-p-hover-color");
  tailwindLeftBorder.classList.add("tailwind-hex-border-left");
  tailwindMiddleBorder.classList.add("tailwind-hex-bg-color");
  tailwindRightBorder.classList.add("tailwind-hex-border-right");
  tailwindSVGPath.setAttribute("style", "fill: #36BDF9");
});

tailwindSVG.addEventListener("mouseout", () => {
  tailwindIconP.classList.remove("tailwind-p-hover-color");
  tailwindLeftBorder.classList.remove("tailwind-hex-border-left");
  tailwindMiddleBorder.classList.remove("tailwind-hex-bg-color");
  tailwindRightBorder.classList.remove("tailwind-hex-border-right");
  tailwindSVGPath.setAttribute("style", "fill: #fafafa");
});

tailwindIconP.addEventListener("mouseover", () => {
  tailwindIconP.classList.add("tailwind-p-hover-color");
  tailwindLeftBorder.classList.add("tailwind-hex-border-left");
  tailwindMiddleBorder.classList.add("tailwind-hex-bg-color");
  tailwindRightBorder.classList.add("tailwind-hex-border-right");
  tailwindSVGPath.setAttribute("style", "fill: #36BDF9");
});

tailwindIconP.addEventListener("mouseout", () => {
  tailwindIconP.classList.remove("tailwind-p-hover-color");
  tailwindLeftBorder.classList.remove("tailwind-hex-border-left");
  tailwindMiddleBorder.classList.remove("tailwind-hex-bg-color");
  tailwindRightBorder.classList.remove("tailwind-hex-border-right");
  tailwindSVGPath.setAttribute("style", "fill: #fafafa");
});

// JAVASCRIPT ICON HOVER ANIMATION
jsIconP.addEventListener("mouseover", () => {
  jsIcon.classList.add("js-hover-color");
  jsLeftBorder.classList.add("js-hex-border-left");
  jsMiddleBorder.classList.add("js-hex-bg-color");
  jsRightBorder.classList.add("js-hex-border-right");
});

jsIconP.addEventListener("mouseout", () => {
  jsIcon.classList.remove("js-hover-color");
  jsLeftBorder.classList.remove("js-hex-border-left");
  jsMiddleBorder.classList.remove("js-hex-bg-color");
  jsRightBorder.classList.remove("js-hex-border-right");
});

jsIcon.addEventListener("mouseover", () => {
  jsIconP.classList.add("js-hover-color");
  jsLeftBorder.classList.add("js-hex-border-left");
  jsMiddleBorder.classList.add("js-hex-bg-color");
  jsRightBorder.classList.add("js-hex-border-right");
});

jsIcon.addEventListener("mouseout", () => {
  jsIconP.classList.remove("js-hover-color");
  jsLeftBorder.classList.remove("js-hex-border-left");
  jsMiddleBorder.classList.remove("js-hex-bg-color");
  jsRightBorder.classList.remove("js-hex-border-right");
});

// REACT ICON HOVER ANIMATION
reactIconP.addEventListener("mouseover", () => {
  reactIcon.classList.add("react-hover-color");
  reactLeftBorder.classList.add("react-hex-border-left");
  reactMiddleBorder.classList.add("react-hex-bg-color");
  reactRightBorder.classList.add("react-hex-border-right");
});

reactIconP.addEventListener("mouseout", () => {
  reactIcon.classList.remove("react-hover-color");
  reactLeftBorder.classList.remove("react-hex-border-left");
  reactMiddleBorder.classList.remove("react-hex-bg-color");
  reactRightBorder.classList.remove("react-hex-border-right");
});

reactIcon.addEventListener("mouseover", () => {
  reactIconP.classList.add("react-hover-color");
  reactLeftBorder.classList.add("react-hex-border-left");
  reactMiddleBorder.classList.add("react-hex-bg-color");
  reactRightBorder.classList.add("react-hex-border-right");
});

reactIcon.addEventListener("mouseout", () => {
  reactIconP.classList.remove("react-hover-color");
  reactLeftBorder.classList.remove("react-hex-border-left");
  reactMiddleBorder.classList.remove("react-hex-bg-color");
  reactRightBorder.classList.remove("react-hex-border-right");
});

// FIGMA ICON HOVER ANIMATION
figmaIconP.addEventListener("mouseover", () => {
  figmaIcon.classList.add("figma-hover-color");
  figmaLeftBorder.classList.add("figma-hex-border-left");
  figmaMiddleBorder.classList.add("figma-hex-bg-color");
  figmaRightBorder.classList.add("figma-hex-border-right");
});

figmaIconP.addEventListener("mouseout", () => {
  figmaIcon.classList.remove("figma-hover-color");
  figmaLeftBorder.classList.remove("figma-hex-border-left");
  figmaMiddleBorder.classList.remove("figma-hex-bg-color");
  figmaRightBorder.classList.remove("figma-hex-border-right");
});

figmaIcon.addEventListener("mouseover", () => {
  figmaIconP.classList.add("figma-hover-color");
  figmaLeftBorder.classList.add("figma-hex-border-left");
  figmaMiddleBorder.classList.add("figma-hex-bg-color");
  figmaRightBorder.classList.add("figma-hex-border-right");
});

figmaIcon.addEventListener("mouseout", () => {
  figmaIconP.classList.remove("figma-hover-color");
  figmaLeftBorder.classList.remove("figma-hex-border-left");
  figmaMiddleBorder.classList.remove("figma-hex-bg-color");
  figmaRightBorder.classList.remove("figma-hex-border-right");
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
    document.getSelection().rangeCount > 0 ?
    document.getSelection().getRangeAt(0) :
    false;
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