const choices = document.querySelectorAll(".choice");
const outcome = document.querySelector(".outcome");

choices.forEach(choice => {
  choice.addEventListener("click", function(e) {
    e.target.classList.add("expand");
    const userChoice = e.target.textContent;
    const computerChoice = calcComputerChoice();
    // Need to bind arguments for promise to return the correct value... Do not need to set the value of 'this' to anything
    myPromise(removeExpand.bind(null, e), 1000).then(() =>
      myPromise(calcWinner.bind(null, userChoice, computerChoice), 1000).then(
        res => (outcome.textContent = res)
      )
    );
  });
});

function calcComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const index = Math.round(Math.random() * 2);
  return choices[index];
}

function calcWinner(usrChoice, cmpChoice) {
  if (usrChoice === cmpChoice) {
    return `${usrChoice} and ${cmpChoice} are the same... It's a Tie!`;
  } else if (usrChoice === "Scissors" && cmpChoice === "Paper") {
    return `${usrChoice} beats ${cmpChoice}... User wins!`;
  } else if (cmpChoice === "Scissors" && usrChoice === "Paper") {
    return `${cmpChoice} beats ${usrChoice}... Computer wins!`;
  } else if (usrChoice === "Paper" && cmpChoice === "Rock") {
    return `${usrChoice} beats ${cmpChoice}... User wins!`;
  } else if (cmpChoice === "Paper" && usrChoice === "Rock") {
    return `${cmpChoice} beats ${usrChoice}... Computer wins!`;
  } else if (usrChoice === "Rock" && cmpChoice === "Scissors") {
    return `${usrChoice} beats ${cmpChoice}... User wins!`;
  } else if (cmpChoice === "Rock" && usrChoice === "Scissors") {
    return `${cmpChoice} beats ${usrChoice}... Computer wins!`;
  }
}

function removeExpand(e) {
  e.target.classList.remove("expand");
}

function myPromise(func, time) {
  const prom = new Promise(function(resolve, reject) {
    setTimeout(function() {
      const response = func();
      resolve(response);
    }, time);
  });
  return prom;
}
