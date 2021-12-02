
// const cities = ['santiago', 'puerto mont', 'puerto varas', 'concepcion']

import axios from 'axios'
const citiesActions = {
    getCities: () => {
        return async (dispatch, state) => {
            const res = await axios.get('http://localhost:4000/api/cities')
            dispatch({ type: 'request', payload: res.data.response })
        }
    },
    requestCity: (id) => {
        return async (dispatch, state) => {
            const res = await axios.get(`http://localhost:4000/api/cities/${id}`)
            dispatch({ type: 'requestCity', payload: res.data.response })
        }
    },
    filter: (cities, value) => {
        return (dispatch, state) => {
            dispatch({ type: 'filter', payload: { cities, value } })
        }
    }
}

export default citiesActions