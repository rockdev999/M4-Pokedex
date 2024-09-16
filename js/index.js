import Pokemon from "./cardPokemon.js";

const apiURL = "../data/pokemons.json";

function callBack(result) {
  return result.json();
}
function CallBack2(data) {
  return data;
}
function mistake(error) {
  console.log(error);
}

async function obtenerDatos() {
  try {
    const response = await fetch(apiURL)
      .then(callBack)
      .then(CallBack2)
      .catch(mistake);
    // const data = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

const contentCards = document.querySelector(".cards");

async function renderCards(pokemones) {
  let content = "";
  const cards = await pokemones;
  console.log(cards);
  cards.forEach((card, index) => {
    const poke = new Pokemon(
      card.ThumbnailImage,
      card.name,
      card.type,
      card.abilities
    );
    content += poke.createHTML(index);
  });
  contentCards.innerHTML = content;

  const modals = document.querySelectorAll(".content-card");
  modals.forEach((modal, index) => {
    modal.addEventListener("click", () => openModal(index));
  });

  const modal = document.querySelector(".modal");

  async function openModal(index) {
    const poke = await pokemones;
    const pokeModal = poke[index];
    let auxHTML = "";
    auxHTML = `
  <article id="${pokeModal.id}" class="modal-content">
   <span class="close">X</span>
          <div class="content-modal-name">
            <img class="logo" src="./assets/logo.png" alt="" />
            <h2 class="modal-name">${pokeModal.name}</h2>
            <img class="logo" src="./assets/logo.png" alt="" />
          </div>

          <div class="modal-body">
            <div class="modal-content-img">
              <img
                class="modal-img"
                src="${pokeModal.ThumbnailImage}"
                alt=""
              />
            </div>
            <div class="content-description">
              <div class="description">
                <h4>HEIGHT</h4>
                <p class="m-content">${pokeModal.height}</p>
                <h4>WEIGHT</h4>
                <p class="m-content">${pokeModal.weight} lbs</p>
                <div>
                  <h4>ABILITIES</h4>`;
    pokeModal.abilities.forEach((element) => {
      auxHTML += `<p class="m-content">${element}</p>`;
    });
    auxHTML += `</div>
              </div>
              <div class="description">
                <div>
                  <h4>TYPE</h4>`;
    pokeModal.type.forEach((element) => {
      auxHTML += `<p class="m-content">${element}</p>`;
    });
    auxHTML += `</div>
                <div>
                  <h4>WEAKNESS</h4>`;
    pokeModal.type.forEach((element) => {
      auxHTML += `<p class="m-content">${element}</p>`;
    });
    auxHTML += `</div>
              </div>
            </div>
            <button class="modal-btn" type="button" onclick="window.location.href='https://www.pokemon.com${pokeModal.detailPageURL}'">
              more detail
            </button>
          </div>
        </article>
  `;
    modal.innerHTML = auxHTML;
    modal.style.display = "flex";

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

const searchBtn = document.querySelector(".btn");
const inputSearch = document.querySelector(".input");
async function search(name) {
  const cards = await obtenerDatos();
  const pokeSearch = cards.filter(
    (card) => card.name.toLowerCase() === name.toLowerCase()
  );
  return pokeSearch;
}
searchBtn.addEventListener("click", async (event) => {
  const pokeSearch = await search(inputSearch.value);
  if (pokeSearch && pokeSearch.length != 0) {
    renderCards(pokeSearch);
  } else {
    contentCards.innerHTML = `<h1 class='modal-name' style="color:white">no match found</h1>`;
  }
});

renderCards(obtenerDatos());

const show = document.querySelector(".show");

show.addEventListener("click", (event) => {
  renderCards(obtenerDatos());
  inputSearch.value = "";
});
