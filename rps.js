let computerPlay = () => {
    let choice;
   let rng = Math.floor(Math.random()*3);
   if (rng === 0) {
       choice = 'Rock';
   } else if (rng === 1) {
       choice = 'Paper';
   } else {
       choice = 'Scissors';
   }
   return choice;
}
