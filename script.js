/*Loading*/
const preloaderWrapper = document.querySelector(".preloader-wrapper");

window.addEventListener("load", function () {
  preloaderWrapper.classList.add("fade-out-animation");
});
/*Loading*/

/*Background Fade*/
window.addEventListener("scroll", function () {
  var scrollPos = window.scrollY;
  var background = document.getElementById("bg-main");
  var img = document.getElementById("pfp");
  var smicon = document.getElementById("smicons");
  var quote = document.getElementById("quote");
  var bioInfo = this.document.getElementById("bioInfo");

  if (scrollPos >= 800) {
    background.style.opacity = 1;
    img.style.opacity = 0;
    smicon.style.opacity = 0;
    quote.style.opacity = 0;
    bioInfo.style.color = "#bfbfbf";
  } else {
    background.style.opacity = 0;
    img.style.opacity = 1;
    smicon.style.opacity = 1;
    quote.style.opacity = 1;
    bioInfo.style.color = "#f5f5f5";
  }
});
/*Background Fade*/
