// API 1: "http://www.omdbapi.com/?i=tt3896198&apikey=73bc5c8d"

async function main() {
  console.log((await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=73bc5c8d")).json());
}

main();

const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id")

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);  
}

async function renderPosts(id) {
  const posts = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=73bc5c8d`)
  const postsData = await posts.json();
  postListEl.innerHTML = postsData.map(post => postHTML(post)).join('');
}

function postHTML(post) {
  return `
    <div class="post">
        <div class="post__title">
            ${post.title}
        </div>
        <p class="post__body">
            ${post.body}
        </p>
    </div>
  `  
}

renderPosts(id);


function renderMovies() {
  const moviesWrapper = document.querySelector('.movies');

  const movies = getMovies();

  const movieshtml = movies.map((movie) => {
    return `<div class="movie">
      <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movies.url}" alt="">
      </figure>
      <div class="movie__title">
        The Fast and the Furious
      </div>
    </div>`
      }) 
      .join("");

console.log(moviesHtml)
//  moviesWrapper.innerHTML = ;
}

setTimeout(() => {
  renderMovies();
});
//FAKE DATA
function getMovies() {
  return [
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
    ]
}