// src/controllers/post.controller.js
export const getPosts = (req, res) => {
    res.json({ message: "Get all posts" });
};

export const createPost = (req, res) => {
    res.json({ message: "Create a post" });
};

export const getPost = (req, res) => {
    res.json({ message: `Get post with id: ${req.params.id} `});
};

export const updatePost = (req, res) => {
    res.json({ message: `Update post with id: ${req.params.id}` });
};

export const deletePost = (req, res) => {
    res.json({ message: `Delete post with id: ${req.params.id}` });
};