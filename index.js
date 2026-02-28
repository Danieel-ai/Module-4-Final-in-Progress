function renderMovies() {
  console.log('renderMovies')
  //const moviesWrapper = document.querySelector(".movies");

  //const movies = getMovies();

  //movies.map(movie => {
    //return <div class="movie">
      //<figure class="movie__img--wrapper">
        //<img class="movie__img" src="${movie[0].url}" alt=""></img>
      //</figure>
      //<div class="movie__title">
        //${movies[0].title}
      //</div>  
    //</div>
    
  //})
  // moviesWrapper.innerHTML = ;
}

renderMovies();

setTimeout(() => {
  renderMovies();
});
// FAKE DATA
function getMovies() {
  return [
    {
  "Search": [
    {
      "Title": "The Fast and the Furious",
      "Year": "2001",
      "imdbID": "tt0232500",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Fast & Furious 6",
      "Year": "2013",
      "imdbID": "tt1905041",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Fast Five",
      "Year": "2011",
      "imdbID": "tt1596343",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
    },
    {
      "Title": "Fast & Furious",
      "Year": "2009",
      "imdbID": "tt1013752",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The Fast and the Furious: Tokyo Drift",
      "Year": "2006",
      "imdbID": "tt0463985",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
    },
    {
      "Title": "2 Fast 2 Furious",
      "Year": "2003",
      "imdbID": "tt0322259",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTQzYzEwNWMtOTAwYy00YWYwLWE1NTEtZTkxOGQxZTM0M2VhXkEyXkFqcGc@._V1_SX300.jpg"
    },
  ],
  "totalResults": "947",
  "Response": "True"
}
  ]
}