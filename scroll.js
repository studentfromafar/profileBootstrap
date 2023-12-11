/*Scroll*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("show")) {
      entry.target.classList.add("show");
      entry.target.classList.add("showleft");

      // Unobserve the element to stop the animation from repeating
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenleftElements = document.querySelectorAll(".hiddenleft");
hiddenleftElements.forEach((el) => observer.observe(el));

/*Bar on Scroll*/
const bars = document.querySelectorAll(".bar");

bars.forEach((bar) => {
  const progress = bar.getAttribute("data-progress");
  bar.style.width = "0";
  bar.style.transition = `width ${(progress / 100) * 4}s ease`;

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        bar.style.width = progress + "%";
        // Unobserve the element to stop the animation from repeating
        barObserver.unobserve(entry.target);
      }
    });
  });

  barObserver.observe(bar);
});
/*Bar on Scroll*/

/*Reset Scroll*/
history.scrollRestoration = "manual";

$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
/*Reset Scroll*/
/*Scroll*/
