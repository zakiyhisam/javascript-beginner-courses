// challenge 1: Your age in days

function ageInDays(){
    var birthYear = prompt('what year were you born?');
    var ageInDay = (2020 - birthYear)* 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are'+ ageInDay+'days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);//insert element to h1
    document.getElementById('flex-box-result').appendChild(h1);//run flex-box-result by displaying h1's element
    console.log(ageInDay);

}
function reset(){
    document.getElementById('ageInDays').remove(); //remove ageInDays element.
}