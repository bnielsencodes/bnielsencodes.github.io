/* ------------------------------------
VARIABLES
------------------------------------ */

// HTML
const htmlLeftBorder = document.querySelector(".hex-border__left--html");
const htmlMiddleBorder = document.querySelector(".hex-border__middle--html");
const htmlRightBorder = document.querySelector(".hex-border__right--html");
const htmlSVG = document.querySelector(".svg--html");
const htmlColor1 = document.querySelector(".svg--html-color1");
const htmlColor2 = document.querySelector(".svg--html-color2");
const htmlColor3 = document.querySelector(".svg--html-color3");
const htmlColor4 = document.querySelector(".svg--html-color4");
const htmlIconP = document.querySelector(".skill__p--html");
// VITE
const viteLeftBorder = document.querySelector(".hex-border__left--vite");
const viteMiddleBorder = document.querySelector(".hex-border__middle--vite");
const viteRightBorder = document.querySelector(".hex-border__right--vite");
const viteSVG = document.querySelector(".svg--vite");
const viteStroke = document.querySelector(".svg--vite-stroke");
const viteColor1 = document.querySelector(".svg--vite-color1");
const viteColor2 = document.querySelector(".svg--vite-color2");
const viteColor3 = document.querySelector(".svg--vite-color3");
const viteColor4 = document.querySelector(".svg--vite-color4");
const viteColor5 = document.querySelector(".svg--vite-color5");
const viteIconP = document.querySelector(".skill__p--vite");
// GIT
const gitLeftBorder = document.querySelector(".hex-border__left--git");
const gitMiddleBorder = document.querySelector(".hex-border__middle--git");
const gitRightBorder = document.querySelector(".hex-border__right--git");
const gitIcon = document.querySelector(".fa-git-alt");
const gitIconP = document.querySelector(".skill__p--git");
// CSS
const cssLeftBorder = document.querySelector(".hex-border__left--css");
const cssMiddleBorder = document.querySelector(".hex-border__middle--css");
const cssRightBorder = document.querySelector(".hex-border__right--css");
const cssSVG = document.querySelector(".svg--css");
const cssColor1 = document.querySelector(".svg--css-color1");
const cssColor2 = document.querySelector(".svg--css-color2");
const cssColor3 = document.querySelector(".svg--css-color3");
const cssColor4 = document.querySelector(".svg--css-color4");
const cssColor5 = document.querySelector(".svg--css-color5");
const cssColor6 = document.querySelector(".svg--css-color6");
const cssIconP = document.querySelector(".skill__p--css");
// SASS
const sassLeftBorder = document.querySelector(".hex-border__left--sass");
const sassMiddleBorder = document.querySelector(".hex-border__middle--sass");
const sassRightBorder = document.querySelector(".hex-border__right--sass");
const sassIcon = document.querySelector(".devicon-sass-original");
const sassIconP = document.querySelector(".skill__p--sass");
// NEXTJS
const nextjsLeftBorder = document.querySelector(".hex-border__left--nextjs");
const nextjsMiddleBorder = document.querySelector(
  ".hex-border__middle--nextjs"
);
const nextjsRightBorder = document.querySelector(".hex-border__right--nextjs");
const nextjsIcon = document.querySelector(".devicon-nextjs-original");
const nextjsIconP = document.querySelector(".skill__p--nextjs");
// TAILWIND
const tailwindLeftBorder = document.querySelector(
  ".hex-border__left--tailwind"
);
const tailwindMiddleBorder = document.querySelector(
  ".hex-border__middle--tailwind"
);
const tailwindRightBorder = document.querySelector(
  ".hex-border__right--tailwind"
);
const tailwindIconP = document.querySelector(".skill__p--tailwind");
const tailwindSVG = document.querySelector(".svg--tailwind");
const tailwindSVGPath = document.querySelector(".svg__path--tailwind");
// JAVASCRIPT
const jsLeftBorder = document.querySelector(".hex-border__left--js");
const jsMiddleBorder = document.querySelector(".hex-border__middle--js");
const jsRightBorder = document.querySelector(".hex-border__right--js");
const jsIconP = document.querySelector(".skill__p--js");
const jsSVG = document.querySelector(".svg--js");
const jsColor1 = document.querySelector(".svg--js-color1");
const jsColor2 = document.querySelector(".svg--js-color2");
// REACT
const reactLeftBorder = document.querySelector(".hex-border__left--react");
const reactMiddleBorder = document.querySelector(".hex-border__middle--react");
const reactRightBorder = document.querySelector(".hex-border__right--react");
const reactIcon = document.querySelector(".devicon-react-original");
const reactIconP = document.querySelector(".skill__p--react");
// FIGMA
const figmaLeftBorder = document.querySelector(".hex-border__left--figma");
const figmaMiddleBorder = document.querySelector(".hex-border__middle--figma");
const figmaRightBorder = document.querySelector(".hex-border__right--figma");
const figmaIcon = document.querySelector(".fa-figma");
const figmaIconP = document.querySelector(".skill__p--figma");
// VS CODE
// const vscodeLeftBorder = document.querySelector(".hex-border__left--vscode");
// const vscodeMiddleBorder = document.querySelector(
//   ".hex-border__middle--vscode"
// );
// const vscodeRightBorder = document.querySelector(".hex-border__right--vscode");
// const vscodeSVG = document.querySelector(".svg--vscode");
// const vscodePathOne = document.querySelector(".svg--vscode-path1");
// const vscodePathTwo = document.querySelector(".svg--vscode-path2");
// const vscodePathThree = document.querySelector(".svg--vscode-path3");
// const vscodeIconP = document.querySelector(".skill__p--vscode");

/* ------------------------------------
---------------------------------------
tsPARTICLES FOR HERO BACKGROUND ANIMATION
---------------------------------------
------------------------------------ */

tsParticles.load("tsparticles", {
  fps_limit: 60,
  interactivity: {
    events: {
      onHover: {
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
      repulse: {
        distance: 50,
        speed: 0.0075,
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
      speed: 1,
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
      entry.target.classList.add("bio-animation");
    }
  });
});

// Tell the observer which elements to track
observer.observe(document.querySelector(".bio"));

// ANIMATE .ABOUT-SKILLS-CONTAINER
const observer2 = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("skills-animation");
    }
  });
});

// Tell the observer which elements to track
observer2.observe(document.querySelector(".skills"));

/* ------------------------------------
---------------------------------------
SKILLS ICON MOUSEOVER ANIMATIONS
---------------------------------------
------------------------------------ */

// HTML ICON HOVER ANIMATION
htmlSVG.addEventListener("mouseover", () => {
  htmlLeftBorder.classList.add("hex-border__left-hover--html");
  htmlMiddleBorder.classList.add("hex-bg-color--html");
  htmlRightBorder.classList.add("hex-border__right-hover--html");
  htmlIconP.classList.add("hover-color--html");
  htmlColor1.setAttribute("style", "fill: #E44D26");
  htmlColor2.setAttribute("style", "fill: #f16529");
  htmlColor3.setAttribute("style", "fill: #EBEBEB");
  htmlColor4.setAttribute("style", "fill: #fff");
});

htmlSVG.addEventListener("mouseout", () => {
  htmlLeftBorder.classList.remove("hex-border__left-hover--html");
  htmlMiddleBorder.classList.remove("hex-bg-color--html");
  htmlRightBorder.classList.remove("hex-border__right-hover--html");
  htmlIconP.classList.remove("hover-color--html");
  htmlColor1.setAttribute("style", "fill: #fafafa");
  htmlColor2.setAttribute("style", "fill: #fafafa");
  htmlColor3.setAttribute("style", "fill: #272727");
  htmlColor4.setAttribute("style", "fill: #272727");
});

htmlIconP.addEventListener("mouseover", () => {
  htmlLeftBorder.classList.add("hex-border__left-hover--html");
  htmlMiddleBorder.classList.add("hex-bg-color--html");
  htmlRightBorder.classList.add("hex-border__right-hover--html");
  htmlIconP.classList.add("hover-color--html");
  htmlColor1.setAttribute("style", "fill: #E44D26");
  htmlColor2.setAttribute("style", "fill: #f16529");
  htmlColor3.setAttribute("style", "fill: #EBEBEB");
  htmlColor4.setAttribute("style", "fill: #fff");
});

htmlIconP.addEventListener("mouseout", () => {
  htmlLeftBorder.classList.remove("hex-border__left-hover--html");
  htmlMiddleBorder.classList.remove("hex-bg-color--html");
  htmlRightBorder.classList.remove("hex-border__right-hover--html");
  htmlIconP.classList.remove("hover-color--html");
  htmlColor1.setAttribute("style", "fill: #fafafa");
  htmlColor2.setAttribute("style", "fill: #fafafa");
  htmlColor3.setAttribute("style", "fill: #272727");
  htmlColor4.setAttribute("style", "fill: #272727");
});

// VITE SVG HOVER ANIMATION
viteSVG.addEventListener("mouseover", () => {
  viteLeftBorder.classList.add("hex-border__left-hover--vite");
  viteMiddleBorder.classList.add("hex-bg-color--vite");
  viteRightBorder.classList.add("hex-border__right-hover--vite");
  viteIconP.classList.add("hover-color--vite");
  viteStroke.setAttribute("style", "stroke: none");
  viteColor1.setAttribute("style", "stop-color: #41D1FF");
  viteColor2.setAttribute("style", "stop-color: #BD34FE");
  viteColor3.setAttribute("style", "stop-color: #FFEA83");
  viteColor4.setAttribute("style", "stop-color: #FFDD35");
  viteColor5.setAttribute("style", "stop-color: #FFA800");
});

viteSVG.addEventListener("mouseout", () => {
  viteLeftBorder.classList.remove("hex-border__left-hover--vite");
  viteMiddleBorder.classList.remove("hex-bg-color--vite");
  viteRightBorder.classList.remove("hex-border__right-hover--vite");
  viteIconP.classList.remove("hover-color--vite");
  viteStroke.setAttribute("style", "stroke: #272727");
  viteColor1.setAttribute("style", "stop-color: #fafafa");
  viteColor2.setAttribute("style", "stop-color: #fafafa");
  viteColor3.setAttribute("style", "stop-color: #fafafa");
  viteColor4.setAttribute("style", "stop-color: #fafafa");
  viteColor5.setAttribute("style", "stop-color: #fafafa");
});

viteIconP.addEventListener("mouseover", () => {
  viteLeftBorder.classList.add("hex-border__left-hover--vite");
  viteMiddleBorder.classList.add("hex-bg-color--vite");
  viteRightBorder.classList.add("hex-border__right-hover--vite");
  viteIconP.classList.add("hover-color--vite");
  viteStroke.setAttribute("style", "stroke: none");
  viteColor1.setAttribute("style", "stop-color: #41D1FF");
  viteColor2.setAttribute("style", "stop-color: #BD34FE");
  viteColor3.setAttribute("style", "stop-color: #FFEA83");
  viteColor4.setAttribute("style", "stop-color: #FFDD35");
  viteColor5.setAttribute("style", "stop-color: #FFA800");
});

viteIconP.addEventListener("mouseout", () => {
  viteLeftBorder.classList.remove("hex-border__left-hover--vite");
  viteMiddleBorder.classList.remove("hex-bg-color--vite");
  viteRightBorder.classList.remove("hex-border__right-hover--vite");
  viteIconP.classList.remove("hover-color--vite");
  viteStroke.setAttribute("style", "stroke: #272727");
  viteColor1.setAttribute("style", "stop-color: #fafafa");
  viteColor2.setAttribute("style", "stop-color: #fafafa");
  viteColor3.setAttribute("style", "stop-color: #fafafa");
  viteColor4.setAttribute("style", "stop-color: #fafafa");
  viteColor5.setAttribute("style", "stop-color: #fafafa");
});

// GIT ICON HOVER ANIMATION
gitIconP.addEventListener("mouseover", () => {
  gitLeftBorder.classList.add("hex-border__left-hover--git");
  gitMiddleBorder.classList.add("hex-bg-color--git");
  gitRightBorder.classList.add("hex-border__right-hover--git");
  gitIcon.classList.add("hover-color--git");
});

gitIconP.addEventListener("mouseout", () => {
  gitLeftBorder.classList.remove("hex-border__left-hover--git");
  gitMiddleBorder.classList.remove("hex-bg-color--git");
  gitRightBorder.classList.remove("hex-border__right-hover--git");
  gitIcon.classList.remove("hover-color--git");
});

gitIcon.addEventListener("mouseover", () => {
  gitLeftBorder.classList.add("hex-border__left-hover--git");
  gitMiddleBorder.classList.add("hex-bg-color--git");
  gitRightBorder.classList.add("hex-border__right-hover--git");
  gitIconP.classList.add("hover-color--git");
});

gitIcon.addEventListener("mouseout", () => {
  gitLeftBorder.classList.remove("hex-border__left-hover--git");
  gitMiddleBorder.classList.remove("hex-bg-color--git");
  gitRightBorder.classList.remove("hex-border__right-hover--git");
  gitIconP.classList.remove("hover-color--git");
});

// CSS ICON HOVER ANIMATION
cssSVG.addEventListener("mouseover", () => {
  cssLeftBorder.classList.add("hex-border__left-hover--css");
  cssMiddleBorder.classList.add("hex-bg-color--css");
  cssRightBorder.classList.add("hex-border__right-hover--css");
  cssIconP.classList.add("hover-color--css");
  cssColor1.setAttribute("style", "fill: #1572B6");
  cssColor2.setAttribute("style", "fill: #33A9DC");
  cssColor3.setAttribute("style", "fill: #fff");
  cssColor4.setAttribute("style", "fill: #EBEBEB");
  cssColor5.setAttribute("style", "fill: #fff");
  cssColor6.setAttribute("style", "fill: #EBEBEB");
});

cssSVG.addEventListener("mouseout", () => {
  cssLeftBorder.classList.remove("hex-border__left-hover--css");
  cssMiddleBorder.classList.remove("hex-bg-color--css");
  cssRightBorder.classList.remove("hex-border__right-hover--css");
  cssIconP.classList.remove("hover-color--css");
  cssColor1.setAttribute("style", "fill: #fafafa");
  cssColor2.setAttribute("style", "fill: #fafafa");
  cssColor3.setAttribute("style", "fill: #272727");
  cssColor4.setAttribute("style", "fill: #272727");
  cssColor5.setAttribute("style", "fill: #272727");
  cssColor6.setAttribute("style", "fill: #272727");
});

cssIconP.addEventListener("mouseover", () => {
  cssLeftBorder.classList.add("hex-border__left-hover--css");
  cssMiddleBorder.classList.add("hex-bg-color--css");
  cssRightBorder.classList.add("hex-border__right-hover--css");
  cssIconP.classList.add("hover-color--css");
  cssColor1.setAttribute("style", "fill: #1572B6");
  cssColor2.setAttribute("style", "fill: #33A9DC");
  cssColor3.setAttribute("style", "fill: #fff");
  cssColor4.setAttribute("style", "fill: #EBEBEB");
  cssColor5.setAttribute("style", "fill: #fff");
  cssColor6.setAttribute("style", "fill: #EBEBEB");
});

cssIconP.addEventListener("mouseout", () => {
  cssLeftBorder.classList.remove("hex-border__left-hover--css");
  cssMiddleBorder.classList.remove("hex-bg-color--css");
  cssRightBorder.classList.remove("hex-border__right-hover--css");
  cssIconP.classList.remove("hover-color--css");
  cssColor1.setAttribute("style", "fill: #fafafa");
  cssColor2.setAttribute("style", "fill: #fafafa");
  cssColor3.setAttribute("style", "fill: #272727");
  cssColor4.setAttribute("style", "fill: #272727");
  cssColor5.setAttribute("style", "fill: #272727");
  cssColor6.setAttribute("style", "fill: #272727");
});

// SASS ICON HOVER ANIMATION
sassIconP.addEventListener("mouseover", () => {
  sassLeftBorder.classList.add("hex-border__left-hover--sass");
  sassMiddleBorder.classList.add("hex-bg-color--sass");
  sassRightBorder.classList.add("hex-border__right-hover--sass");
  sassIcon.classList.add("hover-color--sass");
});

sassIconP.addEventListener("mouseout", () => {
  sassLeftBorder.classList.remove("hex-border__left-hover--sass");
  sassMiddleBorder.classList.remove("hex-bg-color--sass");
  sassRightBorder.classList.remove("hex-border__right-hover--sass");
  sassIcon.classList.remove("hover-color--sass");
});

sassIcon.addEventListener("mouseover", () => {
  sassLeftBorder.classList.add("hex-border__left-hover--sass");
  sassMiddleBorder.classList.add("hex-bg-color--sass");
  sassRightBorder.classList.add("hex-border__right-hover--sass");
  sassIconP.classList.add("hover-color--sass");
});

sassIcon.addEventListener("mouseout", () => {
  sassLeftBorder.classList.remove("hex-border__left-hover--sass");
  sassMiddleBorder.classList.remove("hex-bg-color--sass");
  sassRightBorder.classList.remove("hex-border__right-hover--sass");
  sassIconP.classList.remove("hover-color--sass");
});

// NEXTJS ICON HOVER ANIMATION
nextjsIconP.addEventListener("mouseover", () => {
  nextjsLeftBorder.classList.add("hex-border__left-hover--nextjs");
  nextjsMiddleBorder.classList.add("hex-bg-color--nextjs");
  nextjsRightBorder.classList.add("hex-border__right-hover--nextjs");
  nextjsIcon.classList.add("hover-color--nextjs");
});

nextjsIconP.addEventListener("mouseout", () => {
  nextjsLeftBorder.classList.remove("hex-border__left-hover--nextjs");
  nextjsMiddleBorder.classList.remove("hex-bg-color--nextjs");
  nextjsRightBorder.classList.remove("hex-border__right-hover--nextjs");
  nextjsIcon.classList.remove("hover-color--nextjs");
});

nextjsIcon.addEventListener("mouseover", () => {
  nextjsLeftBorder.classList.add("hex-border__left-hover--nextjs");
  nextjsMiddleBorder.classList.add("hex-bg-color--nextjs");
  nextjsRightBorder.classList.add("hex-border__right-hover--nextjs");
  nextjsIconP.classList.add("hover-color--nextjs");
});

nextjsIcon.addEventListener("mouseout", () => {
  nextjsLeftBorder.classList.remove("hex-border__left-hover--nextjs");
  nextjsMiddleBorder.classList.remove("hex-bg-color--nextjs");
  nextjsRightBorder.classList.remove("hex-border__right-hover--nextjs");
  nextjsIconP.classList.remove("hover-color--nextjs");
});

// TAILWIND SVG HOVER ANIMATION
tailwindSVG.addEventListener("mouseover", () => {
  tailwindLeftBorder.classList.add("hex-border__left-hover--tailwind");
  tailwindMiddleBorder.classList.add("hex-bg-color--tailwind");
  tailwindRightBorder.classList.add("hex-border__right-hover--tailwind");
  tailwindIconP.classList.add("hover-color--tailwind");
  tailwindSVGPath.setAttribute("style", "fill: #36BDF9");
});

tailwindSVG.addEventListener("mouseout", () => {
  tailwindLeftBorder.classList.remove("hex-border__left-hover--tailwind");
  tailwindMiddleBorder.classList.remove("hex-bg-color--tailwind");
  tailwindRightBorder.classList.remove("hex-border__right-hover--tailwind");
  tailwindIconP.classList.remove("hover-color--tailwind");
  tailwindSVGPath.setAttribute("style", "fill: #fafafa");
});

tailwindIconP.addEventListener("mouseover", () => {
  tailwindLeftBorder.classList.add("hex-border__left-hover--tailwind");
  tailwindMiddleBorder.classList.add("hex-bg-color--tailwind");
  tailwindRightBorder.classList.add("hex-border__right-hover--tailwind");
  tailwindIconP.classList.add("hover-color--tailwind");
  tailwindSVGPath.setAttribute("style", "fill: #36BDF9");
});

tailwindIconP.addEventListener("mouseout", () => {
  tailwindLeftBorder.classList.remove("hex-border__left-hover--tailwind");
  tailwindMiddleBorder.classList.remove("hex-bg-color--tailwind");
  tailwindRightBorder.classList.remove("hex-border__right-hover--tailwind");
  tailwindIconP.classList.remove("hover-color--tailwind");
  tailwindSVGPath.setAttribute("style", "fill: #fafafa");
});

// JAVASCRIPT ICON HOVER ANIMATION

jsSVG.addEventListener("mouseover", () => {
  jsLeftBorder.classList.add("hex-border__left-hover--js");
  jsMiddleBorder.classList.add("hex-bg-color--js");
  jsRightBorder.classList.add("hex-border__right-hover--js");
  jsIconP.classList.add("hover-color--js");
  jsColor1.setAttribute("style", "fill: #F0DB4F");
  jsColor2.setAttribute("style", "fill: #323330");
});

jsSVG.addEventListener("mouseout", () => {
  jsLeftBorder.classList.remove("hex-border__left-hover--js");
  jsMiddleBorder.classList.remove("hex-bg-color--js");
  jsRightBorder.classList.remove("hex-border__right-hover--js");
  jsIconP.classList.remove("hover-color--js");
  jsColor1.setAttribute("style", "fill: #fff");
  jsColor2.setAttribute("style", "fill: #272727");
});

jsIconP.addEventListener("mouseover", () => {
  jsLeftBorder.classList.add("hex-border__left-hover--js");
  jsMiddleBorder.classList.add("hex-bg-color--js");
  jsRightBorder.classList.add("hex-border__right-hover--js");
  jsIconP.classList.remove("hover-color--js");
  jsColor1.setAttribute("style", "fill: #F0DB4F");
  jsColor2.setAttribute("style", "fill: #323330");
});

jsIconP.addEventListener("mouseout", () => {
  jsLeftBorder.classList.remove("hex-border__left-hover--js");
  jsMiddleBorder.classList.remove("hex-bg-color--js");
  jsRightBorder.classList.remove("hex-border__right-hover--js");
  jsIconP.classList.remove("hover-color--js");
  jsColor1.setAttribute("style", "fill: #fff");
  jsColor2.setAttribute("style", "fill: #272727");
});

// REACT ICON HOVER ANIMATION
reactIconP.addEventListener("mouseover", () => {
  reactLeftBorder.classList.add("hex-border__left-hover--react");
  reactMiddleBorder.classList.add("hex-bg-color--react");
  reactRightBorder.classList.add("hex-border__right-hover--react");
  reactIcon.classList.add("hover-color--react");
});

reactIconP.addEventListener("mouseout", () => {
  reactLeftBorder.classList.remove("hex-border__left-hover--react");
  reactMiddleBorder.classList.remove("hex-bg-color--react");
  reactRightBorder.classList.remove("hex-border__right-hover--react");
  reactIcon.classList.remove("hover-color--react");
});

reactIcon.addEventListener("mouseover", () => {
  reactLeftBorder.classList.add("hex-border__left-hover--react");
  reactMiddleBorder.classList.add("hex-bg-color--react");
  reactRightBorder.classList.add("hex-border__right-hover--react");
  reactIconP.classList.add("hover-color--react");
});

reactIcon.addEventListener("mouseout", () => {
  reactLeftBorder.classList.remove("hex-border__left-hover--react");
  reactMiddleBorder.classList.remove("hex-bg-color--react");
  reactRightBorder.classList.remove("hex-border__right-hover--react");
  reactIconP.classList.remove("hover-color--react");
});

// FIGMA ICON HOVER ANIMATION
figmaIconP.addEventListener("mouseover", () => {
  figmaLeftBorder.classList.add("hex-border__left-hover--figma");
  figmaMiddleBorder.classList.add("hex-bg-color--figma");
  figmaRightBorder.classList.add("hex-border__right-hover--figma");
  figmaIcon.classList.add("hover-color--figma");
});

figmaIconP.addEventListener("mouseout", () => {
  figmaLeftBorder.classList.remove("hex-border__left-hover--figma");
  figmaMiddleBorder.classList.remove("hex-bg-color--figma");
  figmaRightBorder.classList.remove("hex-border__right-hover--figma");
  figmaIcon.classList.remove("hover-color--figma");
});

figmaIcon.addEventListener("mouseover", () => {
  figmaLeftBorder.classList.add("hex-border__left-hover--figma");
  figmaMiddleBorder.classList.add("hex-bg-color--figma");
  figmaRightBorder.classList.add("hex-border__right-hover--figma");
  figmaIconP.classList.add("hover-color--figma");
});

figmaIcon.addEventListener("mouseout", () => {
  figmaLeftBorder.classList.remove("hex-border__left-hover--figma");
  figmaMiddleBorder.classList.remove("hex-bg-color--figma");
  figmaRightBorder.classList.remove("hex-border__right-hover--figma");
  figmaIconP.classList.remove("hover-color--figma");
});

// VS CODE SVG HOVER ANIMATION
// vscodeSVG.addEventListener("mouseover", () => {
//   vscodeLeftBorder.classList.add("hex-border__left-hover--vscode");
//   vscodeMiddleBorder.classList.add("hex-bg-color--vscode");
//   vscodeRightBorder.classList.add("hex-border__right-hover--vscode");
//   vscodeIconP.classList.add("hover-color--vscode");
//   vscodePathOne.setAttribute("style", "fill: #0065A9");
//   vscodePathTwo.setAttribute("style", "fill: #007ACC");
//   vscodePathThree.setAttribute("style", "fill: #1F9CF0");
// });

// vscodeSVG.addEventListener("mouseout", () => {
//   vscodeLeftBorder.classList.remove("hex-border__left-hover--vscode");
//   vscodeMiddleBorder.classList.remove("hex-bg-color--vscode");
//   vscodeRightBorder.classList.remove("hex-border__right-hover--vscode");
//   vscodeIconP.classList.remove("hover-color--vscode");
//   vscodePathOne.setAttribute("style", "fill: #fafafa");
//   vscodePathTwo.setAttribute("style", "fill: #fafafa");
//   vscodePathThree.setAttribute("style", "fill: #fafafa");
// });

// vscodeIconP.addEventListener("mouseover", () => {
//   vscodeLeftBorder.classList.add("hex-border__left-hover--vscode");
//   vscodeMiddleBorder.classList.add("hex-bg-color--vscode");
//   vscodeRightBorder.classList.add("hex-border__right-hover--vscode");
//   vscodeIconP.classList.add("hover-color--vscode");
//   vscodePathOne.setAttribute("style", "fill: #0065A9");
//   vscodePathTwo.setAttribute("style", "fill: #007ACC");
//   vscodePathThree.setAttribute("style", "fill: #1F9CF0");
// });

// vscodeIconP.addEventListener("mouseout", () => {
//   vscodeLeftBorder.classList.remove("hex-border__left-hover--vscode");
//   vscodeMiddleBorder.classList.remove("hex-bg-color--vscode");
//   vscodeRightBorder.classList.remove("hex-border__right-hover--vscode");
//   vscodeIconP.classList.remove("hover-color--vscode");
//   vscodePathOne.setAttribute("style", "fill: #fafafa");
//   vscodePathTwo.setAttribute("style", "fill: #fafafa");
//   vscodePathThree.setAttribute("style", "fill: #fafafa");
// });

/* ------------------------------------
SMOOTH SCROLL ON ANCHOR CLICK
------------------------------------ */
// code taken from https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
