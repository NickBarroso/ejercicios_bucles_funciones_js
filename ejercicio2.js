//2. Contar cuantas son de antes del año 2000 y cuantas posteriores
const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

function moviesCount(moviesList) {
  let before2000 = 0;
  let after2000 = 0;

  for (let i = 0; i < moviesList.length; i++) {
    let movieYear = moviesList[i].releaseYear;
    if (movieYear < 2000) {
      before2000++;
    } else {
      after2000++;
    }
  }
  return `Hay un total de ${before2000} películas que se han estrenado antes del 2000 \ny un total de ${after2000} películas que se estrenaron después de esa misma fecha.`;
}

console.log(moviesCount(movies));
