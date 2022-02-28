let computerPlay = (playerChoice) => {
    let rng = Math.floor(Math.random()*3);
   if (rng === 0) {
       aiChoice = 'Rock';
   } else if (rng === 1) {
       aiChoice = 'Paper';
   } else {
       aiChoice = 'Scissors';
   }
   
   if (playerChoice === 'Rock' && aiChoice === 'Scissors' || playerChoice === 'Paper' && aiChoice === 'Rock' || playerChoice === 'Scissors' && aiChoice === 'Paper') {
       console.log(`You chose ${playerChoice} and your opponent chose ${aiChoice}. You win!`)
   }
}
