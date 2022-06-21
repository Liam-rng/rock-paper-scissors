function computerPlay() {
    let random_number = Math.floor(Math.random() * 3) + 1;
    return (random_number === 3 ? "PAPER" : random_number === 2 ? "ROCK" : "SCISSORS");
}

function promptPlayer() {
    var choice = window.prompt("Howdy! Are you down for a friendly game of Rock, Paper, Scissors? \nType in your choice:")
    let str1 = choice.toString();
    return str1.toUpperCase();
}
let ties = 0, wins = 0, losses = 0;
function playRound(human_sel, pc_sel) {
    if (pc_sel == human_sel){
        ties++;
        return (`You both selected ${pc_sel}. A tie, well done.`);
    }
    else if (pc_sel == "PAPER" && human_sel == "ROCK" || pc_sel == "ROCK" && human_sel == "SCISSORS" || pc_sel == "SCISSORS" && human_sel == "PAPER"){
        wins++; 
        return (`You chose ${human_sel} and the computer chose ${pc_sel}. Haha! Gotcha!`);
}
    else {
        losses++;
        return (`You chose ${human_sel} and the computer chose ${pc_sel}. What a tryhard.`);
    }
}

// function game(games = 5) {
//     var pc_wins = 0, player_wins = 0, ties = 0;
//     for (let i = 0; i < games; i++) {

//         let pc_choice = computerPlay();
//         let player_choice = promptPlayer();

//         console.log(`The computer played ${pc_choice} and you played ${player_choice}.`)

//         let str1 = playRound(player_choice, pc_choice);

//         if (str1 == "A tie, well done.")
//             ties++;
//         else if (str1 == "Haha! Gotcha!")
//             pc_wins++;
//         else if (str1 == "What a tryhard.")
//             player_wins++;
//     }
//     return (pc_wins > player_wins ? `Wow ${pc_wins}x${player_wins}. The computer won, of course.` : pc_wins === player_wins ? `A tie: ${pc_wins}x${player_wins}. You did better than expected.` : `Y-You won?! ${pc_wins}x${player_wins}. No one will believe you...`)
// }

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let player_choice = button.id.toUpperCase();
        let pc_choice = computerPlay();
        console.log(playRound(player_choice, pc_choice))
        console.log(wins,ties,losses);
    });
  });