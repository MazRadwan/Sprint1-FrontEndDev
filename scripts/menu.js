let hero = document.querySelector("#hero");

let body = document.body;

let currentUrl = 0;
function loadTreeUrl() {
  if (currentUrl === links.length - 1) {
    currentUrl = 0;
  }

  currentUrl++;
  return links[currentUrl];
}

setInterval(() => {
  hero.src = loadTreeUrl();
}, 3000);
