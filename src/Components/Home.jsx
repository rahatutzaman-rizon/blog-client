
import { useEffect, useState } from 'react';

import axios from 'axios';
import Blogs from './Blogs';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/blog');

      setBlogs(result.data);
    
    };
    
    fetchData();
  }, []);

  

  return (
    <>
   <h2 className='mt-4 text-3xl text-center'>This is All Blogs: {blogs.length}</h2>
   <div className='grid grid-cols-3 gap-4'>
   {
      blogs.map(blog=>(<Blogs
      key={blog.id}
      blog={blog}>

      </Blogs>
      ))
    }
   </div>
   
    </>
  )
}

export default Home;
