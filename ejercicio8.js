const artists = [
  { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
  {
    name: "David Bowie",
    influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"],
  },
  {
    name: "Eddie Vedder",
    influences: ["The Who", "Neil Young", "Jim Morrison"],
  },
  {
    name: "Freddie Mercury",
    influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"],
  },
  {
    name: "John Lennon",
    influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
  },
];

for (let i = 0; i < artists.length; i++) {
  let artist = artists[i];
  let message = "El artista " + artist.name + " tiene como influencia: ";
  for (let j = 0; j < artist.influences.length; j++) {
    if (j > 0) {
      message += ", " + artist.influences[j];
    } else {
      message += artist.influences[j];
    }
  }
  console.log((message += "."));
}
