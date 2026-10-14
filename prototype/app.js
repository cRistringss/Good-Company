const welcome = document.querySelector("#welcome");
const feeling = document.querySelector("#feeling");
const start = document.querySelector("#start");
const skip = document.querySelector("#skip");
const back = document.querySelector("#back");
const continueButton = document.querySelector("#continue");
const status = document.querySelector("#status");
const moods = document.querySelectorAll('input[name="mood"]');

const labels = { good: "Good", soso: "So-so", low: "Low" };

function show(screen) {
  const welcomeVisible = screen === "welcome";
  welcome.hidden = !welcomeVisible;
  feeling.hidden = welcomeVisible;
  if (welcomeVisible) {
    start.focus();
  } else {
    back.focus();
  }
}

function selectedMood() {
  const chosen = document.querySelector('input[name="mood"]:checked');
  return chosen ? chosen.value : "";
}

start.addEventListener("click", () => show("feeling"));
skip.addEventListener("click", () => show("feeling"));
back.addEventListener("click", () => show("welcome"));

moods.forEach((input) => {
  input.addEventListener("change", () => {
    continueButton.disabled = false;
    status.textContent = "";
  });
});

continueButton.addEventListener("click", () => {
  const mood = selectedMood();
  if (!mood) return;
  status.textContent = `You chose ${labels[mood]}. Nothing is saved.`;
});
