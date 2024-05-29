const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData
}) => {
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input"/>
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content">
            </div>
        </div>
    </div>    
  `;
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".dropdown-content");
  let dropdownCount;
  const onInput = async event => {
    const items = await fetchData(event.target.value);
    dropdownCount = 0;
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let item of items) {
      const aItem = document.createElement("a");
      aItem.innerHTML = renderOption(item);
      aItem.classList.add("dropdown-item");
      aItem.classList.add("is-align-items-center");
      aItem.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        dropdownCount = 1;
        onOptionSelect(item);
      });
      resultsWrapper.appendChild(aItem);
    }
  };

  input.addEventListener("input", debounce(onInput, 800));

  document.addEventListener("click", event => {
    if (!root.contains(event.target)) {
      dropdownCount = 0;
      dropdown.classList.remove("is-active");
    } else {
      if (dropdownCount === 0) {
        dropdown.classList.add("is-active");
      }
    }
  });
};
