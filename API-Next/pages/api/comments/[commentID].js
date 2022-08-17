import { comments } from "../../../Data/commentsData"

export default function handler(req, res) {
    const { commentID } = req.query
    // console.log(commentID)
    if (req.method === 'GET') {
      const comment = comments.find(comment => comment.id === parseInt(commentID))
      res.status(200).json(comment)
    } else if (req.method === 'DELETE') {
      const deletedComment = comments.find(
        comment => comment.id === parseInt(commentID)
      )
      const index = comments.findIndex(
        comment => comment.id === parseInt(commentID)
      )
      comments.splice(index, 1)
      console.log(comments)
      res.status(200).json(deletedComment)
    }else if(req.method === 'PUT'){
        const comment =JSON.parse(req.body) 
        const newText = comment.updatedcomment
        console.log(newText)
        
        const updateComment = comments.map(
            (comment) => {
                if(comment.id === parseInt(commentID)){
                    comment.text = newText
                }
            }
        )
        res.status(200).json(updateComment)
    }
  }
  