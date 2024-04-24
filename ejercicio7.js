const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

function trackFilter(songList) {
  let trackList = [];

  for (let i = 0; i < songList.length; i++) {
    let song = songList[i];
    // Crearemos un booleano que nos indique si en el array tenemos añadido la canción
    // que de predeterminado será false y que sobreescribirá en cada vuelta del bucle.
    let genreExists = false;
    // Recorremos el trackList comprobando que está la key con el género que estamos trabajando
    // en el bucle.
    for (let j = 0; j < trackList.length; j++) {
      //Si la key es el track que estamos trabajando le añadimos
      if (trackList[j][song.genre]) {
        trackList[j][song.genre].push(song.title);
        genreExists = true;
        break;
      }
    }
    //Si el genero no existe, añade el género como key y crea un array para poder pushear los títulos.
    if (genreExists === false) {
      trackList.push({ [song.genre]: [song.title] });
    }
  }
  return trackList;
}

console.log(trackFilter(tracks));
