const URL = 'http://127.0.0.1:8000';

export const getReservations = () => {
    return fetch(`${URL}/reservations/`)
    .then(res => res.json())
}


export const deleteReservation = (id) => {
    return fetch(`${URL}/reservation-delete/${id}/`,{
        method: 'DELETE',
        contentType: 'application/json'
    })
    .then(res => res.json())
}