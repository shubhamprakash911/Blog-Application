import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";

function HomePage() {
  const [blogData, setblogData] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const res = await axios.get("https://blog-1qeg.onrender.com/blog");
      console.log(res);
      setblogData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <Navbar />
      <div className="blog">
        {blogData.map((blog) => (
          <Blog props={blog} key={blog.id} fetchBlogs={fetchBlogs} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
