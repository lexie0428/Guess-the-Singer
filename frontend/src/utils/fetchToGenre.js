export const fetchToGenre = async (genre) => {
  const response = await fetch(`https://api.deezer.com/genre/${genre}/artists`);
  const artists = await response.json();
  if (artists) {
    const artist = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${
        artists.data[Math.floor(Math.random() * artists.data.length - 1)].name
      }`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '99d2bc2f27msh29e5bdde481eea8p1947abjsnb6872fabc5dd',
        },
      }
    );
    const jsonArtist = await artist.json();
    const data = jsonArtist.data[Math.floor(Math.random() * jsonArtist.data.length - 1)];
    return data;
  }
};
