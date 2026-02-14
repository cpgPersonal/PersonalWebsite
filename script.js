//Function for typing text
function type(text, id, speed) {
    let index = 0;
    const element = document.getElementById(id);
    function typing() {
        element.innerText = text.slice(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(typing, speed); //Runs this function again after sleep timer
        }
    }
    typing();
}

//Running the functions
type("Callum Piper-Gilbert", "mainName", 100);
type("University of Reading", "mainUni", 100);
type("BSc Computer Science", "mainCourse", 100);

const slides = document.querySelectorAll('.slide'); //Selects all that have .slide as the style

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // adds when shown
    } else {
      entry.target.classList.remove('show'); // removes when scrolling up
    }
  });
}, {
  threshold: 0.2
});

slides.forEach(slide => {
  observer.observe(slide);
});