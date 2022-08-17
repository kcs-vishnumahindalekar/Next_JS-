import { useState , useEffect} from 'react'
import {useRouter} from 'next/router'

function CommentsPage() {

const router = useRouter()

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [updatedcomment, setUpdatedcomment] = useState('')

  useEffect(()=>{
    fetchComments()
  },[])

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    setComments(data)
  }

  const viewComment = (id)=>{
    router.push(`comments/${id}`)
  }



  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
    setComment('')
    fetchComments()
  }

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
    fetchComments()
  }

  const updateComment = async(commentId)=>{
    if(updatedcomment){
      const response = await fetch(`/api/comments/${commentId}`,{
        method:'PUT',
        body: JSON.stringify({ updatedcomment })
      })
      const data = await response.json()
      setUpdatedcomment('')
      fetchComments()
    }
  }


  return (
    <>
      <div>
        <input
          type='text'
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit comment</button>
        <button onClick={fetchComments}>Load comments</button>
      </div>
      <hr />
      {comments.map(comment => {
        return (
          <div key={comment.id}>
            {comment.id}. {comment.text}{' '}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>{' '}
            <button onClick={() => viewComment(comment.id)}>View</button>{' '}
            <button onClick={() => updateComment(comment.id)}>Update</button>{' '}
            
          </div>
        )
      })}
      <br/>
      
      Enter Text For Update
      <input
          type='text'
          value={updatedcomment}
          onChange={e => setUpdatedcomment(e.target.value)}
        />
    </>
  )
}

export default CommentsPage