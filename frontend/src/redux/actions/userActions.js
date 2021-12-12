import axios from 'axios'
const userActions = {

    addUser: (userParam) => {
        return async (dispatch, getState) => {
           
            try {
                const user = await axios.post('http://localhost:4000/api/user/signup', userParam)
                console.log(user);
                if (user.data.success && !user.data.error) {
                    dispatch({ type: 'usuario', payload: { userName: user.data.response.userName, imgUrl: user.data.response.imgUrl } })
                } else {
                    return { issues: [{ message: user.data.error }] }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    signIn: (email, password) => {
        return async (dispatch, getState) => {
            try {
                console.log(email, password)
                const user = await axios.post('http://localhost:4000/api/user/signin', { email, password })
                if (user.data.success && !user.data.error) {
                    // return { userName: user.data.response.userName, imgUrl: user.data.response.imgUrl}
                    dispatch({ type: 'usuario', payload: { userName: user.data.response.userName, imgUrl: user.data.response.imgUrl } })
                } else {
                    alert(user.data.error)
                }
            } catch (error) {
                console.error(error)
            }
        }
    }
}

export default userActions