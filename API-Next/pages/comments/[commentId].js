import {comments} from '../../Data/commentsData'
import {useRouter} from 'next/router'

function Comment({ comment }) {
    const router = useRouter()
    const back = ()=>{
        router.push('/comments')
    }
    return (
      <div>
        {comment.id}. {comment.text}
        <button onClick={back}>Back</button>
      </div>
    )
  }
  
  export default Comment

  export async function getStaticProps(context) {
    const { params } = context
    const { commentId } = params
  
    const comment = comments.find(comment => comment.id === parseInt(commentId))
    console.log(comment)
  
    return {
      props: {
        comment
      }
    }
  }

  export async function getStaticPaths() {


    const paths = comments.map(comment => {
        return {
          params: { commentId: `${comment.id}` }
        }
    })

    return {
        paths,
        fallback: false
    }
  }