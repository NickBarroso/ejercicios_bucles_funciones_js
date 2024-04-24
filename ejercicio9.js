const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(xMen) {
  let oldestXmen = [];
  let oldestXmenYear = Infinity;
  for (let i = 0; i < xMen.length; i++) {
    if (xMen[i].year <= oldestXmenYear) {
      // Si hay algun personaje con otra fecha, borramos toda la lista y volvemos a añadir el nuevo
      //puesto que buscamos que la lista devuelva una única fecha y así podemos recibir más de un valor.
      if (xMen[i].year < oldestXmenYear) {
        oldestXmen = [];
        oldestXmenYear = xMen[i].year;
      } else {
        oldestXmen.push({ year: xMen[i].year, name: xMen[i].name });
      }
    }
  }
  return oldestXmen;
}

console.log(findOldestXMen(xMen));
