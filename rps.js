let computerPlay = (playerChoice) => {
    //Code to randomly choose between Rock, paper, or scissors
    let rng = Math.floor(Math.random()*3);
   if (rng === 0) {
       aiChoice = 'Rock';
   } else if (rng === 1) {
       aiChoice = 'Paper';
   } else {
       aiChoice = 'Scissors';
   }
   //AND/OR conditions to determine winner, loser, and ties
   if (playerChoice === 'Rock' && aiChoice === 'Scissors' || playerChoice === 'Paper' && aiChoice === 'Rock' || playerChoice === 'Scissors' && aiChoice === 'Paper') {
       console.log(`You chose ${playerChoice} and your opponent chose ${aiChoice}. You win!`)
   } else if (playerChoice === 'Rock' && aiChoice === 'Paper' || playerChoice === 'Paper' && aiChoice === 'Scissors' || playerChoice === 'Scissors' && aiChoice === 'Rock') {
       console.log(`You chose ${playerChoice} and your opponent chose ${aiChoice}. You lose!`)
   } else if (playerChoice === aiChoice) {
       console.log(`Both you and your opponent chose ${playerChoice}. It's a tie!`)
   } else {
       console.log('You must choose between Rock, Paper, or Scissors!')
   }
   }

