


import axios from 'axios'
const citiesActions = {
    getCities: () => {
        return async (dispatch, state) => {
            const res = await axios.get('http://localhost:4000/api/cities')
            dispatch({ type: 'request', payload: res.data.response })
        }
    },
    getCity: (id) => {
        return async (dispatch, state) => {
            const res = await axios.get(`http://localhost:4000/api/cities/${id}`)
            dispatch({ type: 'requestCity', payload: res.data.response })
        }
    },

    getItineraries: (id) => {
        return async (dispatch, state) => {
            const res = await axios.get(`http://localhost:4000/api/itinerary/city/${id}`)
            console.log(res);
            dispatch({ type: 'requestItineraries', payload: res.data.response })
        }
    },
    

    filter: (cities, value) => {
        return (dispatch, state) => {
            dispatch({ type: 'filter', payload: { cities, value } })
        }
    }
}

export default citiesActions