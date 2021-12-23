import axios from "axios";
const citiesActions = {
  getCities: () => {
    return async (dispatch, state) => {
      const res = await axios.get("http://localhost:4000/api/cities");
      dispatch({ type: "request", payload: res.data.response });
    };
  },
  getCity: (id) => {
    return async (dispatch, state) => {
      const res = await axios.get(`http://localhost:4000/api/cities/${id}`);
      dispatch({ type: "requestCity", payload: res.data.response });
    };
  },

  getItineraries: (id) => {
    return async (dispatch, state) => {
      const res = await axios.get(
        `http://localhost:4000/api/itinerary/city/${id}`
      );
      dispatch({ type: "requestItineraries", payload: res.data.response });
    };
  },

  filter: (cities, value) => {
    return (dispatch, state) => {
      dispatch({ type: "filter", payload: { cities, value } });
    };
  },
  like: (idI) => {
    return async (dispatch, state) => {
      try {
        const res = await axios.put(
          `http://localhost:4000/api/likes/itinerary/${idI}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        dispatch({
          type: "likes",
          payload: {
            idI,
            likes: res.data.response,
          },
        });
        return { idUser: res.data.idUser };
      } catch (error) {
        return { error: "The user is not registered (You first must sign in)" };
      }
    };
  },
  addComment: (itineraryId, text,img, userName) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.post(`http://localhost:4000/api/comments/itinerary/${itineraryId}`, {text,img,userName}, {
            headers: { 'Authorization': 'Bearer ' + token }
        })

        return { succes: true, comments: res.data.comments }

    } catch (error) {
        return { succes: false, error: 'The user is not registered (You first must sign in)' }
    }
},
deleteComment: (itineraryId, commentId) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.delete(`http://localhost:4000/api/comments/${commentId}/itinerary/${itineraryId}`, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return { succes: true, msg: 'Comment deleted successfully', comments: res.data.comments }
    } catch (error) {
        console.log('error');
    }
},
updateComment: (itineraryId, commentId, text) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.put(`http://localhost:4000/api/comments/${commentId}/itinerary/${itineraryId}`, { text }, {
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return { succes: true, msg: 'Comment updated successfully', comments: res.data.comments }
    } catch (error) {
        return { error: 'Unauthorized user, try log in again' }
    }
},
};

export default citiesActions;
