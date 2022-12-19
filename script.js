
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