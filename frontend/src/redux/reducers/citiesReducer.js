const initialState = {
    cities: [],
    auxiliary: [],
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

        default: return state
    }
}

export default citiesReducer