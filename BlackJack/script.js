//create blackjack asset object/library
let blackjackGame={
    'you':{'scorespan': '#your-blackjack-result', 'div': '#your-box','score':0}
    ,'dealer':{'scorespan': '#dealer-blackjack-result', 'div': '#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap':{'2': 2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,
    'standControl':false,
}

const YOU =blackjackGame['you']; //player part
const DEALER =blackjackGame['dealer']; //bot part

const hitSound = new Audio('sounds/swish.m4a'); //hit button audio
const winSound = new Audio('sounds/cash.mp3'); //hit button audio
const lossSound = new Audio('sounds/aww.mp3'); //hit button audio


document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);

document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackhit(){
    if(blackjackGame['isStand']=== false){
        let card = randomCard();
        console.log(card);
        showCard(card,YOU);
        updateScore(card,YOU);
        showScore(YOU);
        blackjackGame['standControl']=true;
    }
    
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer){
    if (activePlayer['score']<=21){
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        cardImage.style.height = '130';
        cardImage.style.width = '100';
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal(){
    if(blackjackGame['turnsOver']===true){

        blackjackGame['isStand']=false;
        let yourImage = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
        
        for(i=0;i< yourImage.length;i++)
        {
            yourImage[i].remove();
        }
        for(i=0;i< dealerImage.length;i++){
            dealerImage[i].remove();
    
        }
        YOU['score']=0;
        DEALER['score']=0;
    
        document.querySelector('#your-blackjack-result').textContent=0;
        document.querySelector('#your-blackjack-result').style.color='white';
        document.querySelector('#dealer-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').style.color='white';
        document.querySelector('#blackjack-result').textContent="Let's play!";
        document.querySelector('#blackjack-result').style.color='white';
        blackjackGame['turnsOver']=false;
    }
    
}
//update current score of activeplayer based on random card draw
function updateScore(card, activePlayer){   
    //if card = Ace, the score is determine by whether adding 11 will give the score higher than 21. if true, then the card will be counted as 1.                                    
    if(card==='A'){                         
        if (activePlayer['score']+ blackjackGame['cardsMap'][card][1]<= 21){
            activePlayer['score']+=blackjackGame['cardsMap'][card][1];

        }else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }

    }else{
        activePlayer['score']+=blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scorespan']).textContent= 'BUST!!!'; //show current score of active player
        document.querySelector(activePlayer['scorespan']).style.color= 'red'; //show current score of active player
    }else{
        document.querySelector(activePlayer['scorespan']).textContent= activePlayer['score']; //show current score of active player        
    }

}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic(){
    if(blackjackGame['standControl']===true){

        
        blackjackGame['isStand']=true;

        while(DEALER['score']<16 && blackjackGame['isStand']===true){
            let card = randomCard();
            showCard(card,DEALER);
            updateScore(card,DEALER);
            showScore(DEALER);
            await sleep(1000);

        }
        blackjackGame['standControl']=false;
        blackjackGame['turnsOver']=true;
        showResult(computeWinner());
    }
}

//compute winner and return who just won
//update table
function computeWinner(){
    let winner;
    if (YOU['score']<= 21){
        //condition: higher score than dealer or when dealer busts but you're 21
        if((YOU['score']>DEALER['score'])|| (DEALER['score']>21)){
            console.log('You Won!');
            blackjackGame['wins']++;
            winner=YOU;
        //condition: when your score lower than dealer
        }else if (YOU['score']< DEALER['score']){
            console.log('You Lost!');
            blackjackGame['losses']++;
            winner=DEALER;
        // condition: when your score = dealer score
        }else if (YOU['score']===DEALER['score']){
            console.log('You Drew!');
            blackjackGame['draws']++;
        }
    //contidion: when user busts but dealer doesn't
    }else if(YOU['score']>21 && DEALER['score']<= 21){
        console.log('You Lost!');
        winner=DEALER;
        blackjackGame['losses']++;
    //condition: when you AND dealer busts
    }else if(YOU['score']> 21 && DEALER['score']>21){
        console.log('You Drew!')
        blackjackGame['draws']++;
    }
    console.log('Winner is ', winner);
    console.log(blackjackGame);
    return winner;
}

function showResult(winner){
    let message,messageColor;
    if(blackjackGame['turnsOver']===true){
        if(winner===YOU){
            document.querySelector('#wins').textContent=blackjackGame['wins'];
            message= 'You Won!';
            messageColor='green';
            winSound.play();
        }else if (winner === DEALER){
            document.querySelector('#losses').textContent=blackjackGame['losses'];
            message = 'You Lost!';
            messageColor='red';
            lossSound.play();
        }else{
            document.querySelector('#draws').textContent=blackjackGame['draws'];
            message= 'You Drew!';
            messageColor='red';
        }
        document.querySelector('#blackjack-result').textContent=message;
        document.querySelector('#blackjack-result').style.color =messageColor;
    }
    
}