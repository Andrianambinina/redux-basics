import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/post.action";

const PostForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && content) {
      const data = {
        title,
        author: 'Zo',
        content,
        likes: 0
      };
      dispatch(addPost(data));
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="form-container">
      <form onClick={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Titre du poste" onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder="Postez vos pensées..." onChange={(e) => setContent(e.target.value)}></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
