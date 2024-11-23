
var arr = [
    'So many books, so little time.',
    'A room without books is like a body without a soul.',
    'Be the change that you wish to see in the world.',
    'If you tell the truth, you don\'t have to remember anything.'
];
var random;
var lrandom='';
function  getRandom() {
    do{
        random =arr [Math.floor(Math.random() * arr.length)];
    }while(random===lrandom);
    lrandom=random;

  
  document.getElementById("randomQuote").innerHTML= random;
}
