import { blog } from "../data/blogs"
import "./blog.css"

function BlogPost() {
  return (
    <div className="blogpost">
      <h1>{blog.title}</h1>
      <h2>{blog.author}</h2>
      <h3>{blog.datePosted}</h3>
      <p>{blog.content}</p>
      <img id="center-fit" src ={blog.imageSrc} alt={blog.imageAlt}></img>
    </div>
  )
}

export default BlogPost;
