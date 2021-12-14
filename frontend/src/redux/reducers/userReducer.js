const initialState = {
  userI: '',
  imgUrl: '',
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "userI":
      return {
        ...state,
        userI: action.payload.userI,
        imgUrl: action.payload.imgUrl,
      };
      case "logout": return{
          ...initialState
      }
    default:
      return state;
  }
};


export default userReducers;
