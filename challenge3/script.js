function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(ranToRpsInt()); //data of botchoice is determine by function numToChoise
    console.log('computer choice:',botChoice);
    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);

}
function ranToRpsInt(){
    return Math.floor(Math.random()*3); //return random number from 0 to 1 then times 3
}

function numberToChoice(number){
    return["rock","paper","scissors"][number]; // return 1 array element pick up by resulting[number]
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {                                         //create an object(library) to for result on who win against who.
        'rock': {'scissors':1, 'rock': 0.5, 'paper':0},
        'paper': {'scissors':0, 'rock':1, 'paper':0.5},
        'scissors':{'scissors':0.5, 'rock':0, 'paper':1},
    }
    var yourScore  = rpsDatabase[yourChoice][computerChoice];           //change rock paper scissor to 0/0.5/1 based on hum vs bot
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if (yourScore=== 0){                                            //results message
        return {'message': 'You Lost!', 'color': 'red'};                
    }else if (yourScore === 0.5){
        return {'message': 'Tied!!', 'color': 'yellow'};
    }else{
        return{'message': 'You Won!!!','color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase ={                                                    //get image of rock/paper/scissor from html img src. .src is important so that data will get image, not link
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
//remove all image when click
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv = document.createElement('div'); //create div element for human pick, bot pick, and result
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

//inner html is for sending a html code to html script
humanDiv.innerHTML= "<img src='" + imageDatabase[humanImageChoice] +" ' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
messageDiv.innerHTML ="<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message']+"</h1>";
botDiv.innerHTML= "<img src='" + imageDatabase[botImageChoice] +" ' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243,  24, 233, 1)'>";
//append message of human pick, bot pick and result to flex-box-rps-div Id's.
document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
