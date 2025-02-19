/*
let country = 'mexico';
let continent = 'America';
let population = 660000;

console.log(country);
console.log(continent);
console.log(population);



lenguaje = 'español';
//const country = 'mexico';
//const continent = 'America';
//const isIsland = false;
isIsland = true;
console.log(typeof isIsland); //typeof significa que va a leer el tipo de dato
console.log(typeof population);
console.log(typeof country);
console.log(typeof lenguaje);


console.log(population /2);
console.log(++ population);
console.log(population > 6000000)
console.log(population<33000000)

//cadena de lenguaje
let description =
country +
' esta en ' +
continent + 
' y tiene ' + 
population + 
' de personas hablando ' +
lenguaje;
console.log(description)

//Utlizando sintaxis literal de plantilla
const description2 = `${country} esta en ${continent}, y tiene ${population} de personas hablando ${lenguaje}`
console.log(description2)

//Condiciones If/else
if(population > 33000000){
    console.log(`${country} su poblacione es de ${population}`)
}else{
    (console.log(`${country} su poblacion es ${33000000 - population} millones de avitantes`));
}

//Conversion de tipos y coerción
console.log('9' - '5'); // -> 4 ?
console.log('19' - '13' + '17'); // -> 617?
console.log('19' - '13' + 17); // -> 23 ?
console.log('123' < 57); // -> False?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143?

//Operados de igualdad: == VS. ===
const numNeighbours = prompt(
    'How many neighbour countries does your country have?'
  );

  if (numNeighbours === 1) {
    console.log('Only 1 border!');
  } else if (numNeighbours > 1) {
    console.log('More than 1 border');
  } else {
    console.log('No borders');
  }
*/
  //Operadores lógicos


  const habitantes = prompt('Cuantos habitantes son?');
  const idioma = prompt('Que idioma hablan?');

  if(idioma === "ingles" && habitantes<50 && habitantes>0){
    console.log('Muy bien, vivire aqui');
 
  }else{
    console.log('No vivas aqui!!');
  }
