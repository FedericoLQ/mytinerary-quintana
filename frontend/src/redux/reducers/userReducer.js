const initialState = {
  usuario: {},
  imgUrl: {},
  userlog: false,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "usuario":
      return {
        ...state,
        usuario: action.payload.usuario,
        imgUrl: action.payload.imgUrl,
        userlog: true,
      };
      case "logout": return{
          ...state,
          userlog: false
      }
    default:
      return state;
  }
};


export default userReducers;
