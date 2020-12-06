class NewsApi {
  constructor ({ baseUrl, key }) {
    this._url = baseUrl;
    this._key = key;
  }

  searchRequest (keyword) {
    const date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const sevenDays = date.getDate() - 7;
    date.setDate(sevenDays);
    const weekAgo = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    return fetch(`${this._url}?language=ru&q=${keyword}&from=${weekAgo}&to=${today}&pageSize=100&apiKey=${this._key}`, {
      method: 'GET'
    })
      .then(res => res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`))
  }
}

const newsApi = new NewsApi({baseUrl: 'https://nomoreparties.co/news/v2/everything', key: '0013f67c8d1c422ca16f464b9b880b26' });

export default newsApi;
