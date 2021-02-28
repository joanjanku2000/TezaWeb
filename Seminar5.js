/* Ushtrimi 1 */
function shPDP(){
    var n1 = window.prompt("Jep numrin e pare");
    var n2 = window.prompt("Jep numrin  dyte");

    var shume = n1+n2;
    var prodhim = n1*n2;
    var pjesetim = n1/n2;
    var diferenca = n1 - n2;
    var all  = [shume,prodhim,pjesetim,diferenca];
    return all;
}

/* Ushtrimi 3 */

function tabela(n){

    for (var i = 0;i<n;i++){
        print("<td>"+i+"</td>");
        print("<td>"+(Math.pow(i,2))+"</td>");
        print("<td>"+(Math.pow(i,3))+"</td>");
    }
}

/* Ushtrimi 4 */
var Palindrome = (n) =>{
    // numrin e marrim si string

    var length = n.length;
    for (var i = 0,j = length - 1; i<n && j>0; i++ , j--){
        if (n.charAt(i).localeCompare(n.charAt(j))!=0) return false;
    }
    return true;
}
var isPalindrome = (n) => {
    return Palindrome(n);
}
/*
 * 9.22
 * 9.23
 * 9.24 
 */
var n1,n2,ans;
var numberOfQuestions ;
var numberOfCorrectAnswers;
var firstTime ;
function start(){
    var submit = document.getElementById("submit");
    var start = document.getElementById("start");
    numberOfQuestions = 0;
    numberOfCorrectAnswers = 0;
    submit.removeAttribute('disabled');
    firstTime = false;
    start.addEventListener('click',generateQuestion,false);
    submit.addEventListener('click',validate,false);
}
var goodAnswers = ['Very Good !','Excellent !','Nice Work ! ','Keep up the good work'];
var badAnswers = ['No. Please try again.','Wrong. Try once more.','Don\'t give up','No. Keep trying.'];

function randomInteger(min, max) {
    // min included
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function generateQuestion(){
    n1 = parseInt(Math.random()*10);
    n2 = parseInt(Math.random()*10);
    numberOfQuestions++;
    // console.log(numberOfQuestions);
    // console.log(numberOfCorrectAnswers);
    firstTime = true;
    var quest = "How much is "+ n1 + " times "+ n2 + " ?";
    document.getElementById('question').innerHTML = quest;
}
function validate(){
    if (numberOfQuestions == 2){
        var percentage = numberOfCorrectAnswers/numberOfQuestions*100;
        console.log(percentage);
        if (percentage>=0.75){
            document.getElementById('mesazhi').innerHTML = "You scored higher than 75%";
            submit.setAttribute('disabled',true);
        } else {
            document.getElementById('mesazhi').innerHTML = "Please ask your instructor for more help.";
            submit.setAttribute('disabled',true);
        }
    }
    ans = document.getElementById('answer');
    
    if (parseInt(ans.value)==n1*n2) {
        var goodRep = goodAnswers[randomInteger(0,4)];
        document.getElementById('mesazhi').innerHTML = goodRep;
        if (firstTime)
        numberOfCorrectAnswers++;
        generateQuestion();
    } else{
        firstTime = false;
        var badRep = badAnswers[randomInteger(0,4)];
        document.getElementById('mesazhi').innerHTML = badRep;
    }
}
window.addEventListener('load',start);

/* Ushtrimi 9.29 */

function power(base,exponent){
    if (exponent == 0) return 1;
    return base * power(base,--exponent);
}