// Javascript til smileys //

const smileys = document.querySelectorAll(".smileyContainer img");
const categoryContainer = document.getElementById("categoryContainer");

smileys.forEach((smiley) => {
  smiley.addEventListener("click", () => {
    const mood = smiley.dataset.mood;

    switch (mood) {
      // Ked af det / neutral
      case "megetKed":
      case "lidtKed":
      case "midt":
        categoryContainer.innerHTML = `

        <h2> Dyrk yoga efter dit humør! </h2>

          <a href="oevelser.html#afspaendingVideo" class="flexBut">
            Destress
          </a>

          <a href="oevelser.html#mindfulnessVideo" class="flexBut">
            Mindfulness
          </a>

          <a href="#humorBoks" class="flexBut">
            Humør
          </a>
        `;
        break;

      // Glade smileys
      case "lidtGlad":
      case "megetGlad":
        categoryContainer.innerHTML = `

         <h2> Dyrk yoga efter dit humør! </h2>
         
          <a href="oevelser.html#smidighedVideo" class="flexBut">
            Smidighed
          </a>

          <a href="oevelser.html#styrkeVideo" class="flexBut">
            Styrke
          </a>

          <a href="#humorBoks" class="flexBut">
            Humør
          </a>
        `;
        break;

      default:
        categoryContainer.innerHTML = "";
    }
  });
});

// Javascript til podcast

const playButton = document.querySelector(".playButton");

const podcastContainer = document.querySelector(".podcastPlayingContainer");

const videoPlayer = document.querySelector("video");

// Tjekker om elementerne findes, før vi tilføjer event listener, så det ikke giver fejl på andre sider hvor elementerne ikke findes

if (playButton && podcastContainer && videoPlayer) {
  playButton.addEventListener("click", function () {
    podcastContainer.style.display = "flex";

    videoPlayer.play();
  });
}

// Javascript til humør test //

const spørgsmål = document.querySelectorAll(".spørgsmål");
const næsteKnapper = document.querySelectorAll(".næste");

let current = 0;

næsteKnapper.forEach((knap) => {
  knap.addEventListener("click", () => {
    spørgsmål[current].classList.remove("aktiv");

    current++;

    spørgsmål[current].classList.add("aktiv");
  });
});

// Javascript til Quiz //

const quizBoxes = document.querySelectorAll(".quizBox");

const quizKnapper = document.querySelectorAll(".quizKnap");

let currentQuiz = 0;

quizKnapper.forEach((knap) => {
  knap.addEventListener("click", () => {
    const valgtSvar = quizBoxes[currentQuiz].querySelector("input:checked");

    const feedback = quizBoxes[currentQuiz].querySelector(".quizFeedback");

    // Hvis intet er valgt
    if (valgtSvar === null) {
      feedback.textContent = "Vælg et svar";
    }

    // Hvis svaret er korrekt
    else if (valgtSvar.value === "rigtigt") {
      feedback.textContent = "Korrekt!";

      quizBoxes[currentQuiz].classList.remove("aktivQuiz");

      currentQuiz++;

      // Vis næste spørgsmål
      if (currentQuiz < quizBoxes.length) {
        //Tjekker om der er flere quizzer tilbage
        quizBoxes[currentQuiz].classList.add("aktivQuiz");
      }

      // Quiz færdig
      else {
        alert("Du gennemførte quizzen 🧘");
        window.location.href = "/sem2-flow5/index.html";
      }
    }

    // Forkert svar
    else {
      feedback.textContent = "Forkert! Prøv igen";
    }
  });
});

//Javascript til slideshows i carroussel //

const slidesExercise1 = document.querySelectorAll(".slide1");
const slidesExercise2 = document.querySelectorAll(".slide2");

console.log(slidesExercise1);

// show current slide
let currentIndex1 = 0;
let currentIndex2 = 0;

function displayImageNumber(slides, index) {
  const numberOfImages = slides.length;

  if (index > numberOfImages - 1) index = 0;
  if (index < 0) index = numberOfImages - 1;

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[index].style.display = "block";

  return index;
}

displayImageNumber(slidesExercise1, 0);
displayImageNumber(slidesExercise2, 0);

//button events

const btnNext1 = document.querySelector(".next1");
const btnPrev1 = document.querySelector(".prev1");
const btnNext2 = document.querySelector(".next2");
const btnPrev2 = document.querySelector(".prev2");

btnNext1.addEventListener("click", () => {
  currentIndex1 = displayImageNumber(slidesExercise1, currentIndex1 + 1);
});

btnPrev1.addEventListener("click", () => {
  currentIndex1 = displayImageNumber(slidesExercise1, currentIndex1 - 1);
});

btnNext2.addEventListener("click", () => {
  currentIndex2 = displayImageNumber(slidesExercise2, currentIndex2 + 1);
});

btnPrev2.addEventListener("click", () => {
  currentIndex2 = displayImageNumber(slidesExercise2, currentIndex2 - 1);
});
