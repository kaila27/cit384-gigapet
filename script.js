$(function() {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".action-button").click(clickedActionButton);
});

// Add a variable "pet_info" equal to a object with the name (string),
// weight (number), and happiness (number) of your pet
var pet_info = {
  name: "Squirtle",
  weight: 20,
  happiness: 15,
  strength: 10,
  popup: "" //added popup object for the comments that the character will say
};

function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness++;
  // Increase pet weight
  pet_info.weight += 2;
  // Increase pet strength
  pet_info.strength++;

  //Pet's comment
  pet_info.popup = "Yummy treat!";

  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness++;
  // Decrease pet weight
  pet_info.weight -= 2;
  // Increase pet strength
  pet_info.strength++;

  //Pet's comment
  pet_info.popup = "Let's play again!";

  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness--;
  // Decrease pet weight
  pet_info.weight -= 2;
  // Decrease pet strength
  pet_info.strength--;

  //Pet's comment
  pet_info.popup = "That made me tired.";

  checkAndUpdatePetInfoInHtml();
}

function clickedActionButton() {
  // Decrease pet happiness
  pet_info.happiness++;
  // Decrease pet strength
  pet_info.strength--;

  //Pet's comment
  pet_info.popup = "Who are we battling next?";

  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
  if (pet_info.strength < 0) {
    pet_info.strength = 0;
  }
}

//Plays Audio sounds
function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}

function playRun() {
  var run = document.getElementById("runAudio");
  run.play();
}

function playEat() {
  var eat = document.getElementById("eatAudio");
  eat.play();
}

function playButton() {
  var play = document.getElementById("playAudio");
  play.play();
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $(".popup").text(pet_info["popup"]);
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
  $(".strength").text(pet_info["strength"]);
}
