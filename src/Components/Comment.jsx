
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';

import Swal from 'sweetalert2';

const Comment = ({allcom}) => {
  const {id}=useParams();
  const navigate = useNavigate();
 
    const {name,email,body,blogId}=allcom;

    const handleDelete = async () => {
      Swal.fire({
        title: 'Are you sure?',
        // ...
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`http://localhost:5000/comment/${id}`);
    
            Swal.fire(
              'Deleted!',
              'Your comment has been deleted.',
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

      navigate('/');
    }

  
    return (
        <div className="bg-gradient-to-r from-teal-500 to-purple-300 p-5 rounded-lg my-5 ml-24 mr-24">

       
          <>
            <p className="font-bold text-white">{name}</p> 
  
            <p className="text-white">{body}</p>
          </>
        
  
      
  
        <div className="flex justify-between text-white mt-5">
          <button
            className="bg-white text-purple-500 px-3 py-1 rounded-full hover:bg-purple-300 hover:text-white"
            
          >
            Update
          </button>
  
          <button onClick={handleDelete}
            className="bg-red-500 px-3 py-1 text-white rounded-full"
          >
            Delete
          </button>
        </div>
  
      </div>
    );
};

export default Comment;