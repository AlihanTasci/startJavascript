const fetchData = async searchTerm => {
  const response = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: "9de88189",
      s: searchTerm
    }
  });
};

const input = document.querySelector("input");
input.addEventListener("input", e => {
  fetchData(e.target.value);
});
