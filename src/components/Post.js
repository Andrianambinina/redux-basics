import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/post.action";
import Like from "./Like";

const Post = ({ post }) => {
    const [editToggle, setEditToggle] = useState(false);
    const [editContent, setEditContent] = useState(post.content);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: post.title,
            content: editContent,
            author: post.author,
            likes: post.likes,
            id: post.id
        };

        dispatch(editPost(data));
        setEditToggle(false);
    };

    const handleDelete = () => {
        dispatch(deletePost(post.id));
    };

    return (
        <div className="post">

            <div className="edit-delete">
                <img src="./icons/edit.svg" alt="edit" onClick={() => setEditToggle(!editToggle)} />
                <img src="./icons/delete.svg" alt="delete" onClick={() => handleDelete()} />
            </div>

            <h2>{post.title}</h2>
            <img
                src="https://picsum.photos/1500/400"
                className="post-img"
                alt="img-post"
            />

            {editToggle ? (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea defaultValue={post.content} onChange={(e) => setEditContent(e.target.value)}></textarea>
                    <input type="submit" value="Valider" />
                </form>
            ) : (
                <p>{post.content}</p>
            )}

            <div className="author">
                <h5>{post.author}</h5>
                <Like post={post} />
            </div>
        </div>
    );
};

export default Post;
