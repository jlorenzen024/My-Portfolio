
function clickHandle4() {
    window.location.href = "https://jlorenzen024.github.io/Rock-Paper-Scissors.github.io/";
}

function clickHandle5() {
    window.location.href = "https://github.com/jlorenzen024/weather-app";
}

function clickHandle6() {
    window.location.href = "https://jlorenzen024.github.io/2022-Resume.github.io/";
}

function clickHandle7() {
    window.location.href = "https://jlorenzen024.github.io/Waste-Wrangler-Website.github.io/"
}

function clickHandle8() {
    window.location.href = "https://www.linkedin.com/in/jacob-lorenzen-304667219/";
}

function clickHandle9() {
    window.location.href = "https://www.instagram.com/luna.lancer/?hl=en";
}

function clickHandle10() {
    window.location.href = "https://github.com/jlorenzen024";
}

function clickHandle11() {
  window.location.href = "https://github.com/jlorenzen024/Open-Menu.github.io";
}

scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
    console
  }
  
  document.getElementById("header-link1").addEventListener('click', () => {
    scrollTo(document.getElementById("second-section"));
  });
  
  document.getElementById("header-link2").addEventListener('click', () => {
    scrollTo(document.getElementById("third-section"));
  });
  
  document.getElementById("header-link3").addEventListener('click', () => {
    scrollTo(document.getElementById("fourth-section"));
  });

  let clip = document.querySelector(".vid")

  clip.addEventListener("mouseover", function (e) {
    clip.play();
 })

 clip.addEventListener("mouseout", function (e) {
  clip.pause();
})

let clip2 = document.querySelector(".vid2")

clip2.addEventListener("mouseover", function (e) {
  clip2.play();
})

clip2.addEventListener("mouseout", function (e) {
clip2.pause();
})

let clip4 = document.querySelector(".vid4")

clip4.addEventListener("mouseover", function (e) {
  clip4.play();
})

clip4.addEventListener("mouseout", function (e) {
clip4.pause();
})

let clip3 = document.querySelector(".vid3")

clip3.addEventListener("mouseover", function (e) {
  clip3.play();
})

clip3.addEventListener("mouseout", function (e) {
clip3.pause();
})