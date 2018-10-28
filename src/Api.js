import fetch from 'isomorphic-fetch';
import viewerStore from './stores/Viewer';

const URL_PREFIX = 'https://www.alphavantage.co';

export default function Api(endpoint, options = {}) {
  const url = `${URL_PREFIX}${endpoint}`;

  if (viewerStore.token) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `${viewerStore.token}`);
    options.headers = myHeaders;
  }

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  return fetch(url, options)
    .then(response => {
      return response.json().then(json => ({ json, response }));
    })
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    });
}
