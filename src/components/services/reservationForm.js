export const getCities = () => {
    return fetch('http://127.0.0.1:8000/cities/')
    .then((response) => response.json())
}

export const getCars = () => {
    return fetch('http://127.0.0.1:8000')
    .then(response => response.json())
}

export const getStations = () => {
    return fetch('http://127.0.0.1:8000/stations/')
    .then((response) => response.json())
}