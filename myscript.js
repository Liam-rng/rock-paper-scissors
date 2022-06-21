function computerPlay() {
    let random_number = Math.floor(Math.random() * 3) + 1;
    return (random_number === 3 ? `PAPER` : random_number === 2 ? `ROCK` : `SCISSORS`);
}
let ties = 0, wins = 0, losses = 0;
function playRound(human_sel, pc_sel) {
    if (pc_sel == human_sel){
        ties++;
        return (`You both selected ${pc_sel}. A tie, well done.`);
    }
    else if (pc_sel == `PAPER` && human_sel == `ROCK` || pc_sel == `ROCK` && human_sel == `SCISSORS` || pc_sel == `SCISSORS` && human_sel == `PAPER`){
        wins++; 
        return (`You chose ${human_sel} and the computer chose ${pc_sel}. Haha! Gotcha!`);
}
    else {
        losses++;
        return (`You chose ${human_sel} and the computer chose ${pc_sel}. What a tryhard.`);
    }
}

  const result_div = document.createElement(`div`);
  result_div.classList.add(`results`);
  result_div.textContent = `The results will be displayed here`;
  result_div.style.background = `gray`;

  const ul_div = document.createElement(`div`);
  const ul = document.createElement(`ul`);
  const w_counter = document.createElement(`li`);
  const t_counter = document.createElement(`li`);
  const l_counter = document.createElement(`li`);

  w_counter.textContent = `Wins: ${wins}`;
  t_counter.textContent = `Ties: ${ties}`;
  l_counter.textContent = `Losses: ${losses}`;
  ul.classList.add(`points`);
  ul.append(w_counter,l_counter,t_counter);
  ul_div.appendChild(ul);

  const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) => {
    button.addEventListener(`click`, () => {
        let player_choice = button.id.toUpperCase();
        let pc_choice = computerPlay();
        result_div.textContent = (playRound(player_choice, pc_choice));
        w_counter.textContent = `Wins: ${wins}`;
        t_counter.textContent = `Ties: ${ties}`;
        l_counter.textContent = `Losses: ${losses}`;
    });
  });

  document.body.appendChild(result_div);
  document.body.appendChild(ul_div);