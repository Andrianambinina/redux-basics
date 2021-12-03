import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Like = ({ post }) => {
    const user = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();

    const postData = {
        title: post.title,
        author: post.author,
        content: post.content,
        likes: post.likes++,
        id: post
    };
    const userData = {
        pseudo: user[0].pseudo,
        likes: user[0].likes,
        id: user[0].id
    };
    dispatch(addLike(postData));

    return (
        <div>
            <img src="./icons/clap.png" className="clap" alt="clap" />
            <span>{post.likes}</span>
        </div>
    );
};

export default Like;
