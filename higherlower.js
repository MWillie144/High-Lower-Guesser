
let maxNum = get_number("Please enter a maximum number.")
let randNum = Math.floor(Math.random() * maxNum + 1);
document.getElementById("maxNum").innerHTML = maxNum;
userGuesses = [];

// Popup prompts users to enter a desired max number and validates input
function get_number(prompt){
    let valid_input = false;
    let num, input;

    while(!valid_input){
        input = window.prompt(prompt);
        num = Number(Math.round(input));

        if(num != NaN && num > 0){
            valid_input = true;
            return num;
        }
    }
}

// Validates user guesses and adds them to array that tracks valid guesses (no duplicate guesses)
function guesser(){
    let guess = Number(Math.round(document.getElementById("guess").value));
    let message = document.getElementById("message");

    if(userGuesses.includes(guess)){
        message.innerHTML = "You already guessed this number!"
    }
    else if (isNaN(guess)){
        message.innerHTML = "That is not a number!"
    }
    else if(guess == randNum){
        userGuesses.push(guess);
        message.innerHTML = "Congrats, you guessed correctly! <br> It took you " + userGuesses.length + 
        " guess(es). <br> Your guess(es) were: " + userGuesses;
    }
    else if(guess < 1 || guess > maxNum){
        message.innerHTML = "That number is not in range, try again."
    }
    else if(guess > randNum){
        message.innerHTML = "Your guess was too high."
        userGuesses.push(guess);
    }
    else{
        message.innerHTML = "Your guesss was too low."
        userGuesses.push(guess);
    }
}
