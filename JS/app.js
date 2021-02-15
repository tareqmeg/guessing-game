'use strict';
let greetMasseage = prompt('Enter your name please :)');
console.log(greetMasseage);
alert('welcome ' + greetMasseage +' you are about to answer few qustions about me hope you like it once you ready click OK');

let myAge = prompt('Is my age 29?(Yes/No)');

console.log(myAge);

if (myAge.toUpperCase() === 'YES'){
  alert('Thats right you have done good');
} else {
  alert('It is ok it is Hard to gusse some time');
}

let myCity = prompt('Is Irbid the city of my birth?(Yes/No)');
console.log(myCity);
if (myCity.toLowerCase() === 'yes'){
  alert('Thats right you are amazing');
} else {
  alert('It is ok you will do good next time');
}

let mySport = prompt('Is swimming my favorite sport?(Yes/No)');
console.log(mySport);
if (mySport.toLowerCase() === 'yes' || mySport.toLowerCase() === 'y'){
  alert('Thats right you are amazing');
} else {
  alert('It is ok you will do good next time');
}

let myAnimal = prompt('Are mansaf and shawarma my favorite traditional food?(Yes/No)');
console.log(myAnimal);
if (myAnimal.toLowerCase() === 'yes' || myAnimal.toLowerCase() === 'y'){
  alert('Thats right you are amazing');
} else {
  alert('It is ok you will do good next time');
}
let myFood = prompt('Is Irbid the city of my birth?(Yes/No)');
console.log(myFood);
if (myFood.toLowerCase() === 'yes'){
  alert('Thats right you are amazing');
} else {
  alert('It is ok you will do good next time');
}
alert(greetMasseage+' you have done the quiq quiz about me hope you like it :)');
