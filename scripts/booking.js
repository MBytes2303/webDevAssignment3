/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let dayCounter = 0;
let calculatedCost = document.getElementById("calculated-cost");

let mondayButton = document.getElementById("monday");
let tuesdayButton = document.getElementById("tuesday");
let wednesdayButton = document.getElementById("wednesday");
let thursdayButton = document.getElementById("thursday");
let fridayButton = document.getElementById("friday");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mondayButton.addEventListener("click", function () {
  clickedState(mondayButton);
});

tuesdayButton.addEventListener("click", function () {
  clickedState(tuesdayButton);
});

wednesdayButton.addEventListener("click", function () {
  clickedState(wednesdayButton);
});

thursdayButton.addEventListener("click", function () {
  clickedState(thursdayButton);
});

fridayButton.addEventListener("click", function () {
  clickedState(fridayButton);
});

function clickedState(currentButton) {
  if (currentButton.classList.contains("clicked")) {
    currentButton.classList.remove("clicked");
    dayCounter--;
  } else {
    currentButton.classList.add("clicked");
    dayCounter++;
  }

  document.getElementById("calculated-cost").innerHTML = recalculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", clearDays);

function clearDays() {
  mondayButton.classList.remove("clicked");
  tuesdayButton.classList.remove("clicked");
  wednesdayButton.classList.remove("clicked");
  thursdayButton.classList.remove("clicked");
  fridayButton.classList.remove("clicked");

  dayCounter = 0;

  document.getElementById("calculated-cost").innerHTML = 0;
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", half);

function half() {
  costPerDay = 20;
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");

  document.getElementById("calculated-cost").innerHTML = recalculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", full);

function full() {
  costPerDay = 35;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");

  document.getElementById("calculated-cost").innerHTML = recalculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
  let newCost = costPerDay * dayCounter;
  return newCost;
}
