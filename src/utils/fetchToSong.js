export const fetchToSong = async () => {
  const artists = await fetch(
    'http://ws.audioscrobbler.com//2.0/?method=chart.gettopartists&api_key=8d0e1a9d07a2dc19acb1ca07f031a4a6&limit=150&format=json'
  );
  const json = await artists.json();
  const num = Math.random() * json.artists.artist.length - 1;
  if (num) {
    const artist = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${
        json.artists.artist[Math.floor(num)].name
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
    const song = jsonArtist.data[Math.floor(Math.random() * jsonArtist.data.length - 1)];
    return song;
  }
};
