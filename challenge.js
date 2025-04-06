/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;
console.log('Su inidec de masa moscular es ' + BMIMark, BMIJohn);
console.log(BMIMark,BMIJohn,markHigherBMI);





const firstName= 'Emilio';
const job = 'teacher';
const birthYear = 2004;
const year=2025;

const Emilio = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old '+ job + '!';
console.log(Emilio) 

const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple\n\
lines');

console.log(`String with
multiple
lines`);

    
const age = 15;
const isOldEnough = age >= 18;


if(isOldEnough){
    console.log('Sarah can start driving licence');
}else{
    const yearLeft = 18 - age;
    console.log(`Sarah is too young . wait another ${yearLeft} years :`);
}

const birthYear = 2004;

let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIJohn > BMIJohn){
    console.log(`Mark's BMI(${BMIMark}) is hegher than john's (${BMIJohn})!`);

}else{
    console.log(`John's BMI (${BMIJohn}) heigher than Marks's!(${BMIMark})!`);
}