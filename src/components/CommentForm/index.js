import "./comform.css"
import { useState } from 'react'

// This component takes in the addComment function from App with the prop key of 'handleInput'

function CommentForm(props) {
  // state that tracks the text input inside the author and comment input boxes 
  const [text, setText] = useState({ author: "", content: "" })

  // function that tracks the author input (while keeping the content input as it is using spread operator) and updating the state 
  function handleChangeAuthor(e) {
    const newText = { ...text, author: e.target.value }
    setText(newText)
  }

  // function that tracks the content input (while keeping the author input as it is using spread operator) and updating the state 
  function handleChangeContent(e) {
    const newText = { ...text, content: e.target.value }
    setText(newText)
  }

  // function that runs the addComment function (which has been passed down as props from App) using the new author and content text as parameters, which will add a new comment to the page 
  function handleSubmit(e) {
    props.handleInput(text.author, text.content);
    // stopping the page reloading on form submit
    e.preventDefault();
    // updating the state on click so that the content input box is reset, whilst keeping the author text the same 
    setText({ ...text, content: "" })
  }

  return (
    <form className="form">
      {/* Setting the value of the input box to reflect the current state of the author text, which is being updated by the handleChangeAuthor function */}
      Author: <input value={text.author} onChange={handleChangeAuthor} />
      {/* Setting the value of the input box to reflect the current state of the content text, which is being updated by the handleChangeContent function */}
      Comment: <input value={text.content} onChange={handleChangeContent} />
      {/* running the addComment function (which is passed down as props from App) on button click so new comment is added */}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default CommentForm;
