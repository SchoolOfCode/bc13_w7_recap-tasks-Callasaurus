import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid"
import { comments } from "../data/comments.js"
import "./app.css"

function App() {

  // State that tracks the comments array that is imported
  const [comment, setComments] = useState(comments);

  // Function that will add a comment (taking in a string for an author and a string for comment)
  function addComment(author, content) {
    // Declaring a new comment object that has an id, author and content key
    const newCommentToAdd = {
      id: uuidv4(),
      author: author,
      content: content
    }

    // Updating the comments array to include the old version of the comment, plus the new comment
    const updatedComments = [...comment, newCommentToAdd]
    
    // Updating the state so that the latest version of the array (including the new comment) is reflected in the state
    setComments(updatedComments)
  }

  return (
    <div>
      {/* Using the BlogPost component that is taking in the first post from the blogs.js file and displaying it on the page */}
      <BlogPost />
      {/* Handing down the comment array state to CommentList with the prop key of 'comments' */}
      <CommentList comments={comment} />
      {/* Handing down the addComment function to CommentForm with the prop key of 'handleInput' */}
      <CommentForm handleInput={addComment} />
    </div>
  )
}

export default App;
