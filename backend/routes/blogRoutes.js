const express = require("express");
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const blogRoute = express.Router();

blogRoute.get("/", getAllBlogs);
blogRoute.post("/create", createBlog);
blogRoute.put("/update", updateBlog);
blogRoute.delete("/delete", deleteBlog);

module.exports = blogRoute;
