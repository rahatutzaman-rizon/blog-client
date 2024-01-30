

// UpdateBlogModal.js

import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateBlogModal({ show, onClose, post }) {

    const {id}=useParams()
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [userId, setUserId] = useState(post.userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const updatedPost = {
      title,
      body,
      userId
    };

    await axios.put(`http://localhost:5000/blog/${id}`, updatedPost);
    
    onClose();
  }

  // modal JSX

  return ( 
    <Modal show={show}>
      <form onSubmit={handleSubmit}>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}  
        />

        <button type="submit">Update</button>
      </form>
    </Modal>
  )
}