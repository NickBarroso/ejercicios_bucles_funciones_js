const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  let keys = Object.keys(capitals);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === country) {
      return `La capital de ${country} es ${capitals[keys[i]]}`;
    }
  }
  return country + " no se encuentra en la lista.";
}

console.log(getCapital("Poland"));
console.log(getCapital("Spain"));
console.log(getCapital("Nigeria"));
console.log(getCapital("Portugal"));
