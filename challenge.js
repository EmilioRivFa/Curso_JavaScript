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



//CHALLENGE #2
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



const inputYear = '2004';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 20);

console.log(Number('Jonas'));

console.log(typeof NaN);

console.log(String(23));

//type coercion
console.log('I am ' + 20 + ' years old');
console.log('I am ' + String(20) + ' years old');

console.log('20' - '10' - 3);
console.log('20' + '10' + 3);
console.log('20' * '10' * 3);
console.log('20' / '10' / 3);

let n = '1' + 1;
n = n-1;
console.log(n);

//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Emilio'));
console.log(Boolean({}));
console.log(Boolean(''));

const dinero = 0;
if(dinero){
    console.log("Don't spend it all ;)");
}else{
    console.log('You should get a job!');
}

let height=5;
if(height){
    console.log("'YAY! Height is defined");
}else{
    console.log('Height is UNDEFINED')
}


*/
const edad = 20;

if(edad === 20){
    console.log('You just an adult :D (strict)');
}

if(edad == 20){
    console.log('You just an adult :D (loose)');
}

const favourite =Number(prompt("cual es tu numero favorito?"));

console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log('Cool 23 is an amazing number ')
}else if(favourite === 7){
    console.log('7 is also a cool number');
}else{
    console.log('Number is not 23 or 7')
}


if(favourite !== 23) console.log('Why not 23?');