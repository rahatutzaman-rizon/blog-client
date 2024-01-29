

// import { useEffect, useState } from 'react';

// import axios from 'axios';
// import { useLoaderData, useParams } from 'react-router-dom';
// const Blog = () => {
//   const {id}=useParams();
//   const specific=useLoaderData();
//   console.log(specific)

//   const [comment, setComment] = useState([]);
//   const[blog,setBlog]=useState();

// useEffect(()=>{
//   const findBlog = specific.find(blog => blog.userId ===id);
  
//   setBlog(findBlog);
// },[specific,id]);
// console.log(blog);


//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get('http://localhost:5000/comment');
// console.log(result);
//       setComment(result.data);
    
//     };
    
//     fetchData();
//   }, []);
    
//     return (
//         <div>

//           <h3>hi blog{comment.length}</h3>


//           <div className="p-4 rounded-lg bg-gray-50">
//       <div className="flex items-center mb-4">
       
//         <div>
//           <p className="text-sm font-bold">username</p>
//           <p className="text-xs text-gray-500">email</p>
//         </div>
//       </div>

//       <p className="text-gray-600">tsx</p>
//     </div>
          
//         </div>
//     );
// };

// export default Blog;


import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';

const Blog = () => {
  // const { id } = useParams();
  const specific = useLoaderData();
 const {title,userId}=specific;
  // Log the specific data to ensure it's loaded correctly
  console.log(specific);

  const [comment, setComment] = useState([]);
  //const [blog, setBlog] = useState();

  useEffect(() => {
    // Fetch comments data
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/comment`);
        console.log(result.data);

        setComment(result.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // Find and set the specific blog
  //   const findBlog = specific.find((blog) => blog.userId === id);

  //   if (findBlog) {
  //     setBlog(findBlog);
  //   }
  // }, [specific, id]);

  // console.log(blog);

  return (
    <div>
<div>

<div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Blog Title</h5>
  <p className="mb-3 font-normal text-gray-700">This is a summary of the blog post content.</p>

  <div className="flex space-x-4">
    <button
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600"
    >
      Create
    </button>
    <button
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-center text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg hover:from-yellow-500 hover:to-yellow-600" 
    >
      Update
    </button>
    <button
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-center text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg hover:from-pink-600 hover:to-red-600"
    >
      Delete
    </button>
  </div>
</div>
</div>


      <div className="p-4 bg-gray-100 rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <div>
          <p className="text-sm font-bold">use</p>
          <p className="text-xs text-gray-500">email</p>
        </div>
      </div>

      <p className="text-gray-600">text</p>
    </div>


    </div>
  );
};

export default Blog;
