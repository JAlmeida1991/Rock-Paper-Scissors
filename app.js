(function() {
  // 'Global' variables:
  const choices = document.querySelectorAll(".choice");
  const outcome = document.querySelector(".outcome");

  // This will prevent user from spamming choices
  let userTurn = true;

  // Event handler(s):
  choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (userTurn) {
        userTurn = false;
        // 1. When user clicks on div, it will expand
        e.target.classList.add("pick-js");
        // This stores the value from font-awesomes class
        const userChoice = e.target.id;
        const computerChoice = calcComputerChoice();
        // Need to bind arguments for promise to return the correct value... Do not need to set the value of 'this'... Any value will work for first argument
        // 2. Need to remove expanded class after half a second
        myPromise(removeExpand.bind(null, e), 500)
          // 3. Show loading message immediately after shrinking div
          .then(() => myPromise(loadingWinner, 0))
          // 4. Try to resolve the promise value of calcWinner after a second
          .then(() =>
            myPromise(calcWinner.bind(null, userChoice, computerChoice), 1000)
          )
          // 5. Set response of promise to paragraph
          .then(response => (outcome.textContent = response))
          // 6. Remove message
          .then(() => {
            myPromise(clearPara, 1500);
            // 7. Allow user to make another choice
            userTurn = true;
          });
      }
    });
  });

  // Helper functions:
  function calcComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.round(Math.random() * 2);
    return choices[index];
  }

  // Do not need to invoke reject since setTimeout will never fail
  function myPromise(func, time) {
    const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        const response = func();
        resolve(response);
      }, time);
    });
    return promise;
  }

  function calcWinner(usrChoice, cmpChoice) {
    if (usrChoice === cmpChoice) {
      return `Players ${usrChoice} and Computers ${cmpChoice} are the same... It's a Tie!`;
    } else if (usrChoice === "scissors" && cmpChoice === "paper") {
      return `Players ${usrChoice} beats Computers ${cmpChoice}... Player wins!`;
    } else if (cmpChoice === "scissors" && usrChoice === "paper") {
      return `Computers ${cmpChoice} beats Players ${usrChoice}... Computer wins!`;
    } else if (usrChoice === "paper" && cmpChoice === "rock") {
      return `Players ${usrChoice} beats Computers ${cmpChoice}... Player wins!`;
    } else if (cmpChoice === "paper" && usrChoice === "rock") {
      return `Computers ${cmpChoice} beats Players ${usrChoice}... Computer wins!`;
    } else if (usrChoice === "rock" && cmpChoice === "scissors") {
      return `Players ${usrChoice} beats Computers ${cmpChoice}... Player wins!`;
    } else if (cmpChoice === "rock" && usrChoice === "scissors") {
      return `Computers ${cmpChoice} beats Players ${usrChoice}... Computer wins!`;
    }
  }

  function removeExpand(e) {
    e.target.classList.remove("pick-js");
  }

  function loadingWinner() {
    outcome.textContent = "Calculating winner....";
  }

  function clearPara() {
    while (outcome.firstChild) {
      outcome.firstChild.remove();
    }
  }
})();
