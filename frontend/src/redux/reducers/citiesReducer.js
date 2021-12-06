const initialState = {
    cities: [],
    auxiliary: [],
    itinerary: [],
    city: {}
}


const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'request':
            return {
                ...state,
                cities: action.payload,
                auxiliary: action.payload
            }
        case 'requestCity':
            return {
                city: action.payload
            }
        case 'filter':
            const filtrado = action.payload.cities.filter((city => city.name.toLowerCase().trim().startsWith(action.payload.value.toLowerCase())))
            return {
                ...state,
                cities: filtrado
            }
        case 'requestItineraries':
            return {
                ...state,
                itinerary: action.payload
            }

        default: return state
    }
}

export default citiesReducer