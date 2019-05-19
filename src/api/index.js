const API_URL = "http://gateway.marvel.com/v1/public";
const API_KEY = "63371a18ed936c6ef18621e8460476c3";

export function getSuperHeros() {
    return fetch(`${API_URL}/characters?apikey=${API_KEY}`)
    .then((response) => Promise.resolve(response.json()))
    .catch(err => {
        alert('Algo salió mal. Intenta nuevamente más tarde.');
        return Promise.reject(err);
    })
}

export function getCharacter(id) {
    return fetch(`${API_URL}/characters/${id}?apikey=${API_KEY}`)
    .then((response) => Promise.resolve(response.json()))
    .catch(err => {
        alert('Algo salió mal. Intenta nuevamente más tarde.');
        return Promise.reject(err);
    })
}