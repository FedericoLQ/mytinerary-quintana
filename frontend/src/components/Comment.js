import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import activitiesActions from "../redux/actions/activitiesActions";
import Activity from "./Activity";
import axios from "axios";
import Swal from "sweetalert2";

const Comment = (props) => {
  const text = useRef();
  const textUpdate = useRef();
  const [comments, setComments] = useState([]);
  const [edit, setEdit] = useState({ commentId: "", flag: false });
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function handlerComments(idItinerary) {
      const res = await axios.get(
        `http://localhost:4000/api/comments/itinerary/${idItinerary}`
      );
      setComments(res.data.comments);
    }

    handlerComments(props.itineraryID);
  }, [props.itineraryID]);

  useEffect(() => {
    props.getActivitiesByItinerary(props.itineraryID).then((res) => {
      setActivities(res);
    });
  }, [props]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const res = await props.addComment(
      props.itineraryID,
      text.current.value,
      props.imgUser,
      props.userI
    );
    console.log(res.comments);
    if (res.succes) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡commented!",
        showConfirmButton: false,
        timer: 1500,
      });
      setComments(res.comments);
    } else {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: res.error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="activitiesContainer">
        <h4>Activities</h4>
        <div className="activities">
          {activities.map((activities) => (
            <Activity Activities={activities} key={activities._id} />
          ))}
        </div>
      </div>
      <h2 className="text-center commentsTop">Comments</h2>

      <div className="comments">
          
        {comments.length > 0 &&
          comments.map((comment) => (
            <div key={comment._id}>
              <div className="inComment">
                {!edit.flag && (
                  <>
                 
                    <img
                      height="50px"
                      alt="user img"
                      className="m-2"
                      style={{ borderRadius: "50%" }}
                      src={comment.imgUrl}
                    />{" "}
                    <div>
                     <p>{props.userI}</p>
                    <h4 className="textBg" style={{ marginRight: "1rem" }}>{comment.text}</h4>
                    </div>
                  </>
                )}
                {edit.flag &&
                  (comment._id !== edit.commentId ||
                    comment.user !== props.idUserLogged) && (
                    <h2 style={{ marginRight: "1rem" }}>{comment.text}</h2>
                  )}
                {edit.flag && comment._id === edit.commentId && (
                  <>
                    <input
                      ref={textUpdate}
                      type="text"
                      defaultValue={comment.text}
                      style={{ marginRight: "1rem" }}
                    ></input>{" "}
                    <button className="bgIcon"
                      style={{ cursor: "pointer" }}
                      onClick={async () => {
                        const updatedComments = await props.updateComment(
                          props.itineraryID,
                          comment._id,
                          textUpdate.current.value
                        );
                        setComments(updatedComments.comments);
                        setEdit({ flag: false });
                      }}
                    >
                      ✅
                    </button>
                    <button className="bgIcon"
                      style={{ cursor: "pointer" }}
                      onClick={() => setEdit({ flag: false })}
                    >
                      ❎
                    </button>
                  </>
                )}

                {localStorage.getItem("token") &&
                  comment.user === props.idUserLogged && (
                    <button className="bgIcon"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure want to delete the comment?",
                          showDenyButton: true,
                          confirmButtonText: "Delete",
                          denyButtonText: `Cancel`,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire("¡Deleted!", "", "success");
                            props
                              .deleteComment(props.itineraryID, comment._id)
                              .then((data) => setComments(data.comments));
                          } else if (result.isDenied) {
                            Swal.fire("The message was not deleted", "", "info");
                          }
                        });
                      }}
                    >
                      ❌
                    </button>
                  )}
                {localStorage.getItem("token") &&
                  comment.user === props.idUserLogged && (
                    <button className="bgIcon"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setEdit({ commentId: comment._id, flag: true });
                      }}
                    >
                      ✏
                    </button>
                  )}
              </div>
            </div>
          ))}
        {comments.length <= 0 && <h2 className="text-center textColor mt-5">No comment at the moment</h2>}
      </div>
      <div className="d-flex">                
      <form className="formComments" onSubmit={handlerSubmit}>
        <textarea
          type="text"
          className="fontInput"
          cols="50"
          rows="1"
          placeholder="Enter your comment here"
          ref={text}
        />
        <input style={{ cursor: "pointer" }} type="submit" className="ps-2 pe-2" value="Send" />
      </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addComment: citiesActions.addComment,
  deleteComment: citiesActions.deleteComment,
  updateComment: citiesActions.updateComment,
  getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary,
};
const mapStateToProps = (state) => ({
  idUserLogged: state.userReducer.userId,
  imgUser: state.userReducer.imgUrl,
  userI: state.userReducer.userI
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
