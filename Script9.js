const characters= ['Harry', 'Herimone', 'Ron', 'Draco', 'Luna'];
for(let i=1; i<=5;i++) {
    console.log(characters[i]);
}

const FirstName = 'Harry';
const house = 'Gryffindor'; 
console.log(`Welcome, ${FirstName} of ${house}!`);

const characterName = 'Hermione';
console.log (characterName.toLowerCase ())
console.log (characterName.toUpperCase ())

const spell = 'Expelliarmus'
console.log(spell.trim())

const quote = 'I solemnly swear that I am up to no good'; 
console.log (quote.slice(11, 17));

const LastName = 'Weasly';
console.log ('Ron'.concat(' ', LastName));

let sentence = 'Draco is a good wizard';
console.log (sentence.replace ('good', "bad"));

const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

const spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);
