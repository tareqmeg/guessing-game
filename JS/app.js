'use strict';
let greetMasseage = prompt('Enter your name please :)');

alert('welcome ' + greetMasseage +' you are about to answer few qustions about me hope you like it once you ready click OK');

let Score = 0;
let myAge = prompt('Is my age 29?(Yes/No)or (y/n)');


let q1= function(age){

  if (age.toUpperCase() === 'YES' || age.toLowerCase() === 'y'){
    alert('Thats right you have done good');
    Score++;
  } else if (age.toLowerCase() === 'no' || age.toLowerCase() === 'n') {
    alert('It is ok it is Hard to gusse some time');
  }

};
q1(myAge);


let myCity = prompt('Is Irbid the city of my birth?(Yes/No)or (y/n)');


let q2= function(city){
  if (city.toLowerCase() === 'yes' || city.toLowerCase() === 'y'){
    alert('Thats right you are amazing');
    Score++;
  } else if (city.toLowerCase() === 'no' || city.toLowerCase() === 'n'){
    alert('It is ok you will do good next time');
  }
};
q2(myCity);


let mySport = prompt('Is swimming my favorite sport?(Yes/No)or (y/n)');

let q3 = function(sport){
  if (sport.toLowerCase() === 'yes' || sport.toLowerCase() === 'y'){
    alert('Thats right you are amazing');
    Score++;
  } else if (sport.toLowerCase() === 'no' || sport.toLowerCase() === 'n') {
    alert('It is ok you will do good next time');
  }
};
q3(mySport);


let myAnimal = prompt('Do i Love Cats (yes/no) or (y/n)or (y/n)');
console.log(myAnimal);

let q4 = function( animal){
  if (animal.toLowerCase() === 'yes' || animal.toLowerCase() === 'y'){
    alert('Thats right you are amazing');
    Score++;
  } else if (animal.toLowerCase() === 'no' || animal.toLowerCase() === 'n') {
    alert('It is ok you will do good next time');
  }
};
q4(myAnimal);


let myFood = prompt('Are mansaf and shawarma my favorite traditional food?(Yes/No)or (y/n)');


let q5 = function(food){
  if (food.toLowerCase() === 'yes' || food.toLowerCase() === 'y'){
    alert('Thats right you are amazing');
    Score++;
  } else if (food.toLowerCase() === 'no' || food.toLowerCase() === 'n'){
    alert('It is ok you will do good next time');
  }
};
q5(myFood);


let mybestNumber = Number(prompt('Guess My Best Number( give me a number)'));


let i=1;
let q6 = function(number){
  while(number !== 7 && i !==4){
    if(number > 7){
      alert('guess is  high');
    }else if ( number < 7){
      alert ('guess is  low');
    }
    number = Number(prompt('Guess My Best Number( give me a number)')) ;
    i++;
  }
};
q6(mybestNumber);


if (mybestNumber !== 7){
  alert('The right answer is (7) sorry for this qustion your answer is wrong you have trid '+ i +' times to answer it good luke next time');
}

if (mybestNumber === 7){
  alert('correct the anser is 7 you have tride ' + i + ' times ');
  Score++;
}

let multiAnswer = prompt('Give a name to one of the most popular types of credit cards?');
multiAnswer.toLowerCase();



let answerArr = ['visa', 'mastercard', 'discover'];

let y=1;

let q7 = function(cardName){
  while(cardName !== answerArr[0] && cardName !== answerArr[1] && cardName !== answerArr[2] && y !==6){

    cardName = prompt('Give a name to one of the most popular types of credit cards?');
    y++;
  }
};
q7(multiAnswer);



if(multiAnswer === answerArr[0] || multiAnswer === answerArr[1] || multiAnswer === answerArr[2]){
  Score++;
}

if (multiAnswer === answerArr[0] || multiAnswer === answerArr[1] || multiAnswer === answerArr[2]){
  alert('Good job the right answer for this qustion is  ,'+ answerArr[0] +', '+ answerArr[1]+', '+answerArr[2]);
} else{
  alert('your answer is wrong you have tride '+ y + ' times the right answer is  ,'+ answerArr[0] +', '+ answerArr[1]+', '+answerArr[2]);
}


alert(greetMasseage+' you have done the quiq quiz about me hope you like it :)' + ' your score is ' + Score +'/7');
