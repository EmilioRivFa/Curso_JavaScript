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
