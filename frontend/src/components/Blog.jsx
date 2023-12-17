import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Blog({ props, fetchBlogs }) {
  const { id, title, content, category } = props;

  async function handleDelete() {
    try {
      const res = await axios.delete(
        `https://blog-1qeg.onrender.com/blog/delete/${id}`
      );
      alert(res.data.message);
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate() {
    try {
    } catch (error) {}
  }

  return (
    <div className="blogCont">
      <h1>{title}</h1>
      <p>{content}</p>
      <h4>{category}</h4>
      <button className="left" onClick={handleDelete}>
        Delete
      </button>
      <button className="right" onClick={handleUpdate}>
        <Link to={`/update/${id}`}>Update</Link>
      </button>
    </div>
  );
}

export default Blog;
