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
        case 'likes':
            return{
            ...state,
            itinerary: state.itinerary.map(itinerary => itinerary._id === action.payload.idI ? {...itinerary, likes:action.payload.likes} : itinerary )

        }    
        default: return state
    }
}

export default citiesReducer