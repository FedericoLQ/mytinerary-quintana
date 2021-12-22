import React,{useRef,useState,useEffect} from 'react'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import axios from 'axios'

const Comment = (props) => {
    const text = useRef()
    const textUpdate = useRef()
    const [comments, setComments] = useState([])
    const [edit, setEdit] = useState({commentId:'',flag:false})

    useEffect(() => {
        async function handlerComments(idItinerary) {
            const res = await axios.get(`http://localhost:4000/api/comments/itinerary/${idItinerary}`)
            setComments(res.data.comments)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        handlerComments(props.itineraryID)
    }, [props.itineraryID])


    const handlerSubmit = async (e) => {
        e.preventDefault()
        const res = await props.addComment(props.itineraryID,  text.current.value, props.imgUser )
        console.log(res.comments);
        if (res.succes) {
            setComments(res.comments)
        } else {
            console.log('usuario no logeado');

        }
    }

    return (
        <div>
            <h2>Leave a comment</h2>
            <form onSubmit={handlerSubmit}>
                <textarea type='text' cols="30" rows='5' placeholder="create a comment" ref={text} />
                <input style={{ cursor: 'pointer' }} type="submit" />
            </form>
            <div>
                { comments.length > 0 && comments.map(comment => <div key={comment._id}>
                    <div style={{ display: 'flex' }}>
                        {!edit.flag &&<> <h2 style={{ marginRight: '1rem' }}>{comment.text}</h2><img height='50px' alt='user img' style={{borderRadius:'50%'}} src={comment.imgUrl}/></>}
                        {edit.flag && ((comment._id !== edit.commentId)||comment.user !== props.idUserLogged) && <h2 style={{ marginRight: '1rem' }}>{comment.text}</h2>}
                        {(edit.flag && (comment._id === edit.commentId)) && <><input ref={textUpdate} type='text' defaultValue={comment.text} style={{ marginRight: '1rem' }}></input> <button style={{ cursor: 'pointer' }} onClick={async () => {
                            const updatedComments = await props.updateComment(props.itineraryID, comment._id, textUpdate.current.value)
                            setComments(updatedComments.comments)
                            setEdit({flag:false})
                        }}>update</button></>}

                        {(localStorage.getItem('token') && comment.user === props.idUserLogged) && <button style={{ color:'blue',cursor: 'pointer' }} onClick={async () => {
                            const updateComments = await props.deleteComment(props.itineraryID, comment._id)
                            setComments(updateComments.comments)
                        }}>x</button>}
                        {(localStorage.getItem('token') && comment.user === props.idUserLogged) && <button style={{ cursor: 'pointer' }} onClick={() => {
                            setEdit({commentId:comment._id,flag:true})
                        }}>u</button>}
                    </div>
                </div>)}
                {comments.length <= 0 && <h2>No comments yet</h2>}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addComment : citiesActions.addComment,
    deleteComment : citiesActions.deleteComment,
    updateComment: citiesActions.updateComment

}
const mapStateToProps = (state)=>({
    idUserLogged: state.userReducer.userId,
    imgUser: state.userReducer.imgUrl
})

export default connect(mapStateToProps,mapDispatchToProps) (Comment)
