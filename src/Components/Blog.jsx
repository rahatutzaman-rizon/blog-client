

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Comment from './Comment';
import Swal from 'sweetalert2';

const Blog = () => {
  const {id}=useParams();
  const specific = useLoaderData();
 const {title,userId,body,_id}=specific;

 const [showModal, setShowModal] = useState(false);

  // Log the specific data to ensure it's loaded correctly


  const [comment, setComment] = useState([]);
  //const [blog, setBlog] = useState();
  const handleDelete = async () => {
    Swal.fire({
      title: 'Are you sure?',
      // ...
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/blog/${id}`);
  
          Swal.fire(
            'Deleted!',
            'Your post has been deleted.',
            'success'
          );
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      }
    });
  };
   

  useEffect(() => {
    // Fetch comments data
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/comment`);
       
        const filtered = result.data.filter(c => c.blogId === userId);
        setComment(filtered);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, []);

  

  

  return (
    <div>
<div>

<div className=" ml-96 mx-12 p-4 max-w-sm bg-white rounded-lg border border-gray-300 shadow-md text-center mt-4 mb-2">
  <h5 className="mb-2 text-3xl font-bold tracking-tight text-black-900 ">Blog Title : {title}</h5>
  <p className="mb-3 font-normal  font-bold text-black-700">Blog Details: {body}</p>

  <div className="flex space-x-4">
   
<Link to ="/update">
  
<button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-center text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg hover:from-yellow-500 hover:to-yellow-600" onClick={() => setShowModal(true)}>
       Update 
      </button>
</Link>
    
    <button onClick={handleDelete}
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-center text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg hover:from-pink-600 hover:to-red-600"
    >Delete
    </button>

    <Link to ="/favourite">
  
<button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-center text-white bg-gradient-to-r from-teal-400 to-yellow-500 rounded-lg hover:from-yellow-500 hover:to-yellow-600" onClick={() => setShowModal(true)}>
      Add Favourite
      </button>
</Link>
    
  </div>
</div>
</div>
<h2 className='mt-4 text-xl font-bold ml-24'>Some Comment : {title}</h2>

<Link to='/addcomment' className='mx-8 ml-24'>
<button 
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-center text-white bg-gradient-to-r from-teal-500 to-red-500 rounded-lg hover:from-pink-500 hover:to-red-300"
    >Add Comment
    </button>
</Link>
{
  
 comment.map(allcom=><Comment
 allcom={allcom}
 key={allcom.id}
 ></Comment>)
}

      

    </div>
  );
};

export default Blog;
