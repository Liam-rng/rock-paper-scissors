function computerPlay() {
    let random_number = Math.floor(Math.random() * 3) + 1;
    return (random_number === 3 ? "PAPER" : random_number === 2 ? "ROCK" : "SCISSORS");
}

function promptPlayer() {
    var choice = window.prompt("Howdy!Are you down for a friendly game of Rock, Paper, Scissors? \nType in your choice:")
    let str1 = choice.toString();
    return str1.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection)
        return "A tie... Was that your best?";
    else if (computerSelection == "PAPER" && playerSelection == "ROCK" || computerSelection == "ROCK" && playerSelection == "SCISSORS" || computerSelection == "SCISSORS" && playerSelection == "PAPER")
        return "Haha! You lost.";
    else if ((playerSelection == "PAPER" && computerSelection == "ROCK" || playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "PAPER"))
        return "You think you're smart huh?!";

    else
        return "You only have three choices genius, it really isn't that hard.";

}

function game(games = 5) {
    let pc_wins = 0, player_wins = 0, ties = 0;
    for (let i = 0; i < games; i++) {


        let str1 = playRound(promptPlayer(), computerPlay())
        if (str1 == "A tie... Was that your best?")
            ties++;
        else if (str1 == "Haha! You lost.")
            pc_wins++;
        else if (str1 == "You think you're smart huh?!")
            player_wins++;
    }
    return pc_wins > player_wins ? "The computer won, of course." : pc_wins == player_wins ? "You did better than expected." : "No one will believe you..."
}