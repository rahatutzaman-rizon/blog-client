import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


const AddBlog = () => {
    const [title, setTitle] = useState(''); 
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
        icon: 'success',
        title: 'Post created!',
        text: 'Your post has been created successfully'
      })
    
    try {
      await axios.post('http://localhost:5000/blog', {
        title, 
        body,
        userId  
      });
      closeModal();
    } catch(err) {
      console.log(err);
    }
  }

    return (
        <div>
             <button 
        className="bg-blue-500 text-white p-2 rounded-full"
        onClick={openModal}
      >
        Add Blog  
      </button>
    
      {isOpen && (
        <div className="fixed inset-0 bg-gray-300 flex items-center justify-center p-8">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-lg mb-4">Add New Blog</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label>Title</label>
                <input 
                  type="text"
                  className="w-full p-2 border" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} 
                />
              </div>
              
              <div className="mb-4">
                <label>Content</label>
                <textarea 
                  rows={4}
                  className="w-full p-2 border"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}  
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label>User ID</label>
                <input 
                  type="text" 
                  className="w-full p-2 border"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)} 
                />
              </div>
              
              <div className="text-right">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  type="submit"  
                >
                  Submit
                </button>
              </div>
            </form>

            <button
              className="text-gray-900"
              onClick={closeModal}  
            >
              Close 
            </button> 
          </div>
        </div>
      )}

        </div>
    );
};

export default AddBlog;