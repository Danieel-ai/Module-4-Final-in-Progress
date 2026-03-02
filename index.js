fetchData();

async function fetchData() {
  try {
    const fast = document.getElementById("fast");

    const response = await fetch("https://www.omdbapi.com/?apikey=73bc5c8d&s=fast");

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();

    if (!data.Search) {
      fast.innerHTML = "<p>No movies found</p>";
      return;
    }

    let moviesHTML = "";

    data.Search.forEach(movie => {
      moviesHTML += `
        <div class="movie_img_wrapper">
          <figure>
            <img class="movie_img" src="${movie.Poster}" alt="${movie.Title}">
          </figure>
          <div class="movie_title">
            ${movie.Title}
          </div>
        </div>
      `;
    });

    fast.innerHTML = moviesHTML;

  } catch (error) {
    console.error(error);
  }
}
