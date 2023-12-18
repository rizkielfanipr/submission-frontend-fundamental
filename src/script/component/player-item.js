class PlayerItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set player(player) {
    this._player = player;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: flex; /* Menggunakan Flexbox untuk mengatur tata letak */
      align-items: center; /* Tengahkan vertikalnya */
      margin: 10px; 
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 30px;
      overflow: hidden;
    }
    .fan-art-player {
      width: 40%; /* Lebar gambar fanart */
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }
    .player-info {
      flex-grow: 1; /* Memenuhi sisanya dengan informasi pemain */
      padding: 24px;
    }
    .player-info > h2 {
      font-weight: lighter;
    }
    .player-info > p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; /* number of lines to show */
    }
  </style>
  
      <img class="fan-art-player" src="${this._player.strFanart1}" alt="Fan Art">
      <div class="player-info">
        <h2>${this._player.strPlayer}</h2>
        <p>${this._player.strDescriptionEN}</p>
      </div>
    `;
  }
}

customElements.define('player-item', PlayerItem);
