import "./comment.css"

// This component takes in as props: comment id (prop key of 'key'), comment author (prop key of 'author') and comment content (prop key of 'content') from the CommentList component 

function Comment(props) {
  console.log(props)

  // defining the author props into a variable
  let author = props.author
  // using some regex to get the first letter of first and last name
  let firstLetterOfNames = author.match(/\b(\w)/g);
  // creating a new variable that stores a capitalised acronym of the first letter of first and last name
  let acronym = firstLetterOfNames.join('').toUpperCase()

  return (
    <div className="comment">
    {/* Returning a H2 that includes the acronym and the author name */}
      <h2 id="circle"> {acronym} {props.author}</h2>
      {/* Returning a p that includes the blog comment */}
      <p>{props.content}</p>
    </div>
  )
}

export default Comment;
