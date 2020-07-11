var all_button = document.getElementsByTagName('button');
console.log(all_button);

var copyAllButton = [];                     //fucntion is to remember the initial button color in an array of copyAllButton
for(let i=0; i< all_button.length; i++){
    copyAllButton.push(all_button[i].classList[1]);
}

console.log(copyAllButton);

function buttonColorChange(buttonThingy){
    console.log(buttonThingy.value);
    if (buttonThingy.value==='red'){
        buttonRed();
    }else if(buttonThingy.value==='green'){
        buttonGreen();
    }else if(buttonThingy.value==='reset'){
        buttonColorReset();
    }else if(buttonThingy.value==='random'){
        randomColor();
    }
}
function buttonRed(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}
function buttonColorReset(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButton[i]);
    }
}
function randomColor(){
    var choices=['btn-primary','btn-danger','btn-warning','btn-success'];

    for(i=0;i<all_button.length;i++){
    let randomNumber =Math.floor(Math.random()*4);
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(choices[randomNumber]);
    
    }
    
}