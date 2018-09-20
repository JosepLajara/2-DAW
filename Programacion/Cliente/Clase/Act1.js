//programa que cuenta las palabras

//definicion de variables

var wordMap = new Map();
var text = "Y Me gustan los perros Y"
var wordArray = text.split(' ');


//cuerpo

for (let i=0;i<wordArray.length;i++){
    let word = wordArray[i];
    if(wordMap.has(word)){
        let count = wordMap.get(word);
        wordMap.set(word,count+1);
    } else {
        wordMap.set(word,1);
    }
}

console.log(wordMap);


