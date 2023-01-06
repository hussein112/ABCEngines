let sections = document.querySelectorAll("section");

window.onscroll = function () {
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 350) {
            section.style.animationPlayState = "running";
          }
    });
  
};