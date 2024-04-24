//Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

// Añade tu código de bucle aquí
function movieDecades(moviesList) {
  const decadeList = [];
  for (let i = 0; i < moviesList.length; i++) {
    const movie = moviesList[i];
    //Creamos una función con scope limitado para limpiar el código
    const objectCreation = (decade, movie) => {
      decadeList.push({
        decade: decade,
        title: movie,
      });
    };
    if (movie.releaseYear <= 1979) {
      objectCreation(1970, movie.title);
    } else if (movie.releaseYear >= 1980 && movie.releaseYear <= 1989) {
      objectCreation(1980, movie.title);
    } else if (movie.releaseYear >= 1990 && movie.releaseYear <= 1999) {
      objectCreation(1990, movie.title);
    } else if (movie.releaseYear >= 2000 && movie.releaseYear <= 2009) {
      objectCreation(2000, movie.title);
    } else if (movie.releaseYear >= 2010 && movie.releaseYear <= 2019) {
      objectCreation(2010, movie.title);
    } else if (movie.releaseYear >= 2020 && movie.releaseYear <= 2029) {
      objectCreation(2020, movie.title);
    }
  }
  return decadeList;
}

//Una vez terminada la función movieDecades, tendremos filtrada cada película con su década
//correspondiente. Ahora toca juntarlo toda en un único objeto y para ello hacemos uso de un reduce.

function movieData(movieList) {
  //Invocamos la funcion movieDecades para poder acceder a ella.
  const moviesList = movieDecades(movieList);

  //Con reduce, podemos crear una neuva lista
  const moviesFiltered = moviesList.reduce((newObj, movie) => {
    const foundIndex = newObj.findIndex(
      (index) => index.decade == movie.decade
    );
    //Nos aseguramos que está en la lista haciendo que sea igual o mayor que cero.
    //Si está en la lista añadimos solo el título, en el caso contrario, añadimos la decada y el título
    if (foundIndex >= 0) {
      newObj[foundIndex].titles.push(movie.title);
    } else {
      newObj.push({ decade: movie.decade, titles: [movie.title] });
    }
    return newObj;
  }, []);

  return moviesFiltered;
}

console.log(movieData(starWarsMovies));
