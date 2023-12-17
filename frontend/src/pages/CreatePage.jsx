import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const CreatePage = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    category: "General", // Default category
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint for creating blogs
      const response = await axios.post(
        "https://blog-1qeg.onrender.com/blog/create",
        blogData
      );

      // Handle the response as needed
      console.log("Blog created successfully:", response.data);
      alert(response.data.message);

      // Optionally, you can redirect to another page or perform other actions
    } catch (error) {
      console.error("Error creating blog:", error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="createPageCont">
        <h2>Create a Blog</h2>
        <form onSubmit={handleCreateBlog}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Content:
            <textarea
              name="content"
              value={blogData.content}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Category:
            <select
              name="category"
              value={blogData.category}
              onChange={handleInputChange}
            >
              <option value="Technology">Technology</option>
              <option value="Politics">Politics</option>
              <option value="Geography">Geography</option>
              <option value="Current Affairs">Current Affairs</option>
              <option value="General">General</option>
            </select>
          </label>
          <br />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
