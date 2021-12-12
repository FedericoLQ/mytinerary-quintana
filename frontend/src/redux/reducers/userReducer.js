const initialState = {
   usuario: {},
   imgUrl:{}
}

const userReducers = (state = initialState, action) => {

    switch (action.type) {
        case 'usuario':
            return {
                ...state,
                usuario: action.payload.userName,
                imgUrl: action.payload.imgUrl
            }
        default:
            return state
    }

}

export default userReducers