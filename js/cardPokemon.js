class Pokemon {
  constructor(img, name, type, abilities) {
    this.img = img;
    this.name = name;
    this.type = type;
    this.abilities = abilities;
  }
  createHTML(index) {
    let cardHTML = `
    <div class="content-card">
          <div class="content-img">
            <img
              class="img"
              src="${this.img}"
              alt=""
            />
          </div>
          <h3 class="name content">${this.name}</h3>
          <div class="content-type">
            <h4>Type :</h4>`;
    this.type.forEach((element) => {
      cardHTML += `<p class="content">${element}</p>`;
    });

    cardHTML += `</div>
          <div class="content-abilities">
            <h4>Abilities :</h4>`;
    this.abilities.forEach((element) => {
      cardHTML += `<p class="content">${element}</p>`;
    });
    cardHTML += `</div>
    </div>
    `;

    return cardHTML;
  }
}

export default Pokemon;
