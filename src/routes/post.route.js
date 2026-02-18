import {Router} from 'express';
import { getPosts, createPost, getPost, updatePost, deletePost } from '../controller/post.controller.js';

const router = Router();

// This is very clean - all routes for '/posts' in one chain
router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost);

export default router;