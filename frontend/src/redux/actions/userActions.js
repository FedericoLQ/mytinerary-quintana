import axios from "axios";
const userActions = {
  addUser: (userParam) => {
    return async (dispatch, getState) => {
      try {
        const user = await axios.post(
          "http://localhost:4000/api/user/signup",
          userParam
        );
        if (user.data.success && !user.data.error) {
          localStorage.setItem("token", user.data.response.token);
          dispatch({
            type: "userI",
            payload: {
                userI: user.data.response.userName,
              imgUrl: user.data.response.imgUrl,
            },
          });
        } else {
          return { issues: user.data };
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
  signIn: (email, password, google) => {
    return async (dispatch, getState) => {
      try {
       
        const user = await axios.post("http://localhost:4000/api/user/signin", {
          email,
          password,
          google,
        });
        if (user.data.success && !user.data.error) {
          localStorage.setItem("token", user.data.response.token);

          dispatch({
            type: "userI",
            payload: {
                userI: user.data.response.userName,
              imgUrl: user.data.response.imgUrl,
            },
          });
          return {
            userName: user.data.response.userName,
            imgUrl: user.data.response.imgUrl,
          };
        } else {
          console.log(user.data);
         return {error:user.data.error};
        }
      } catch (error) {
        console.error(error);
      }
    };
  },
  isAuth: () => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        const user = await axios.get("http://localhost:4000/api/user/auth", {
          headers: { Authorization: "Bearer " + token },
        });
        dispatch({
          type: "userI",
          payload: {
            userI: user.data.response.userName,
            imgUrl: user.data.response.imgUrl,
          },
        });
        return { response: user.data.response };
      } catch (error) {
        return { error: "Unautorized user, try login again" };
      }
    };
  },

  LogOut: () => {
    
    return (dispatch) =>{
      localStorage.clear()
      dispatch({
        type: "logout",
      })
    }
  }
};

export default userActions;
