class DataSource {
  static searchPlayer(keyword) {
    return fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${keyword}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.player) {
          return Promise.resolve(responseJson.player);
        } else {
          // Jika tidak ada hasil, kembalikan pesan kesalahan
          return Promise.reject(`${keyword} is not found`);
        }
      })
      .catch(error => {
        // Tangani kesalahan jaringan atau lainnya
        return Promise.reject(`Error: ${error.message}`);
      });
  }
}

export default DataSource;
