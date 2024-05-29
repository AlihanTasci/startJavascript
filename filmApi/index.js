const autoCompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
        <img src="${imgSrc}" width="30"/>
        ${movie.Title} (${movie.Year})
    `;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: "9de88189",
        s: searchTerm
      }
    });
    if (response.data.Error) {
      return [];
    }
    return response.data.Search;
  }
};
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  }
});
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  }
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: "9de88189",
      i: movie.imdbID
    }
  });
  summaryElement.innerHTML = movieTemplate(response.data);
  if (side === "left") {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }
  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = movDet => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];
    const leftSideValue = parseInt(leftStat.dataset.value);
    const rightSideValue = parseInt(rightStat.dataset.value);

    if (leftSideValue > rightSideValue) {
      addWarning(leftStat);
      addPrimary(rightStat);
    } else {
      addWarning(rightStat);
      addPrimary(leftStat);
    }
  });
};

const addPrimary = stat => {
  stat.classList.remove("is-warning");
  stat.classList.add("is-primary");
};
const addWarning = stat => {
  stat.classList.remove("is-primary");
  stat.classList.add("is-warning");
};

const movieTemplate = movDet => {
  const dollars = parseInt(
    movDet.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  );
  const metascore = parseInt(movDet.Metascore);
  const imdbRating = parseInt(movDet.imdbRating);
  const imdbVotes = parseInt(movDet.imdbVotes);
  const awards = parseInt(
    movDet.Awards.split(" ").reduce((prev, curr) => {
      const value = parseInt(curr);

      if (isNaN(value)) {
        return prev;
      } else {
        return prev + value;
      }
    }, 0)
  );
  return `
  <article class="media">
    <figure class="media-left">
      <p class="image is-128x128">
        <img src="${movDet.Poster}" width="50" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movDet.Title}</h1>
        <h4>${movDet.Genre}</h4>
        <p>${movDet.Plot}</p>
      </div>
    </div>
  </article>
  <article data-value=${awards} class="notification is-primary">
    <p class="title">${movDet.Awards}</p>
    <p class="subtitle">Awards</p>
  </article>
  <article data-value=${dollars} class="notification is-primary">
    <p class="title">${movDet.BoxOffice}</p>
    <p class="subtitle">Box Office</p>
  </article>
  <article data-value=${metascore} class="notification is-primary">
    <p class="title">${movDet.Metascore}</p>
    <p class="subtitle">Metascore</p>
  </article>
  <article data-value=${imdbRating} class="notification is-primary">
    <p class="title">${movDet.imdbRating}</p>
    <p class="subtitle">IMDB Ratings</p>
  </article>
  <article data-value=${imdbVotes} class="notification is-primary">
    <p class="title">${movDet.imdbVotes}</p>
    <p class="subtitle">IMDB Votes</p>
  </article>
  `;
};
