const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
  { name: "Rick Sanchez", power: "teleportation" },
];

function findMutantByPower(mutantChar, powerChar) {
  let powerList = [];

  for (let i = 0; i < mutants.length; i++) {
    let mutant = mutants[i].name;
    let power = mutants[i].power;

    if (mutant === mutantChar) {
      console.log("El poder de " + mutant + " es " + power);
    }

    if (power === powerChar) {
      powerList.push(mutant);
    }
  }
  return (
    "Los mutantes con el poder " +
    powerChar +
    " son los siguientes: " +
    powerList
  );
}

console.log(findMutantByPower("Beast", "teleportation"));
