//1. Filtrar los personajes humanos.

const characters = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" },
];

const humanCharacters = [];

function humanFilter(charactersList) {
  for (let i = 0; i < charactersList.length; i++) {
    let character = characters[i];
    if (character.species == "Human") {
      humanCharacters.push(character.name);
    }
  }
}

humanFilter(characters);
console.log("Estos son los personajes humanos:\n", humanCharacters);
