import Comment from "../Comment/index.js";

// This component takes in the comments array state with the prop key of 'comments'

function CommentList(props) {
  return (
    <div>
      {props.comments.map(function (currentComment) {
        // using the array map method to go through the comments array state and return comments with an id, author and content attribute
        // passing down props of the comment id (prop key of 'key'), comment author (prop key of 'author') and comment content (prop key of 'content') to the Comment component
        return <Comment key={currentComment.id} author={currentComment.author} content={currentComment.content} />
      }
      )}
    </div>
  )
}

export default CommentList;
