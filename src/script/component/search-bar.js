class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 20px;
          display: flex;
          background-color: white;
          margin-top: 100px;
          margin-bottom: 50px;
        }
        .search-container > input {
          width: 75%;
          padding: 16px;
          border: 1px solid #27005D; 
          border-radius: 10px;
          font-weight: bold;
        }
        .search-container > input:focus {
          outline: 0;
          border: 2px solid #27005D; 
        }
        .search-container > input:focus::placeholder {
          font-weight: bold;
        }
        .search-container > input::placeholder {
          color: #27005D;
          font-weight: normal;
        }
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: #27005D;
          color: white;
          border: 0;
          text-transform: uppercase;
          border-radius: 10px;
        }
        @media screen and (max-width: 550px){
          .search-container {
            flex-direction: column;
          }
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
          .search-container > button {
            width: 100%;
          }
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Cari Pemain Olahraga" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement')
        .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
