'use strict';
let greetMasseage = prompt('Enter your name please :)');
console.log(greetMasseage);
alert('welcome ' + greetMasseage +' you are about to answer few qustions about me hope you like it once you ready click OK');

let Score = 0;
let myAge = prompt('Is my age 29?(Yes/No)or (y/n)');

console.log(myAge);

if (myAge.toUpperCase() === 'YES' || myAge.toLowerCase() === 'y'){
  alert('Thats right you have done good');
  console.log(Score++);

} else if (myAge.toLowerCase() === 'no' || myAge.toLowerCase() === 'n') {
  alert('It is ok it is Hard to gusse some time');
}

let myCity = prompt('Is Irbid the city of my birth?(Yes/No)or (y/n)');
console.log(myCity);

if (myCity.toLowerCase() === 'yes' || myCity.toLowerCase() === 'y'){
  alert('Thats right you are amazing');
  console.log(Score++);
} else if (myCity.toLowerCase() === 'no' || myCity.toLowerCase() === 'n'){
  alert('It is ok you will do good next time');
}

let mySport = prompt('Is swimming my favorite sport?(Yes/No)or (y/n)');
console.log(mySport);
if (mySport.toLowerCase() === 'yes' || mySport.toLowerCase() === 'y'){
  alert('Thats right you are amazing');
  console.log(Score++);
} else if (mySport.toLowerCase() === 'no' || mySport.toLowerCase() === 'n') {
  alert('It is ok you will do good next time');
}

let myAnimal = prompt('Do i Love Cats (yes/no) or (y/n)or (y/n)');
console.log(myAnimal);
if (myAnimal.toLowerCase() === 'yes' || myAnimal.toLowerCase() === 'y'){
  alert('Thats right you are amazing');
  console.log(Score++);
} else if (myAnimal.toLowerCase() === 'no' || myAnimal.toLowerCase() === 'n') {
  alert('It is ok you will do good next time');
}
let myFood = prompt('Are mansaf and shawarma my favorite traditional food?(Yes/No)or (y/n)');
console.log(myFood);
if (myFood.toLowerCase() === 'yes' || myFood.toLowerCase() === 'y'){
  alert('Thats right you are amazing');
  console.log(Score++);
} else if (myFood.toLowerCase() === 'no' || myFood.toLowerCase() === 'n'){
  alert('It is ok you will do good next time');
}

let myBNumber = Number(prompt('Guess My Best Number( give me a number)'));
console.log(myBNumber);

let i=1;
while(myBNumber !== 7 && i !==4){
  if(myBNumber > 7){
    alert('guess is  high');
  }else if ( myBNumber < 7){
    alert ('guess is  low');
  }
  myBNumber =Number(prompt('Guess My Best Number( give me a number)')) ;
  i++;
}
console.log(i);
if (myBNumber !== 7){
  alert('The right answer is (7) sorry for this qustion your answer is wrong you have trid '+ i +' times to answer it good luke next time');
}
console.log(myBNumber);
if (myBNumber === 7){
  alert('correct the anser is 7 you have tride ' + i + ' times ');
  Score++;
}
let multiAnswer = prompt('Give a name to one of the most popular types of credit cards?');
multiAnswer.toLowerCase();
console.log(multiAnswer);
let answerArr = ['visa', 'mastercard', 'discover'];

let y=1;

while(multiAnswer !== answerArr[0] && multiAnswer !== answerArr[1] && multiAnswer !== answerArr[2] && y !==6){

  prompt('Give a name to one of the most popular types of credit cards?');
  y++;
}
console.log(multiAnswer);
console.log(y);

if(multiAnswer === answerArr[0] || multiAnswer === answerArr[1] || multiAnswer === answerArr[2]){
  Score++;
}

if (multiAnswer === answerArr[0] || multiAnswer === answerArr[1] || multiAnswer === answerArr[2]){
  alert('Good job the right answer for this qustion is  ,'+ answerArr[0] +', '+ answerArr[1]+', '+answerArr[2]);
} else{
  alert('your answer is wrong you have tride '+ y + ' times the right answer is  ,'+ answerArr[0] +', '+ answerArr[1]+', '+answerArr[2]);
}


alert(greetMasseage+' you have done the quiq quiz about me hope you like it :)' + ' your score is ' + Score +'/7');
