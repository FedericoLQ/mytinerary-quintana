const initialState = {
  userI: "",
  imgUrl: "",
  userId: "",
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "userI":
      return {
        ...state,
        userI: action.payload.userI,
        imgUrl: action.payload.imgUrl,
        userId: action.payload.userId,
      };
    case "logout":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducers;
