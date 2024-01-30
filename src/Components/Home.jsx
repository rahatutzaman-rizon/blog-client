
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import axios from 'axios';
import Blogs from './Blogs';
import { Link } from 'react-router-dom';

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
    <Marquee>
    <h2 className='mt-4 text-3xl font-bold bg-sky-300 p-2 m-2 text-center'>This is All Blogs: {blogs.length}</h2>
    </Marquee>
  
   <Link className='mt-8 ml-12   ' to={`/addblog`}>
        <button className="btn btn-primary mt-4 font-bold text-black  bg-gradient-to-r from-sky-300 to-blue-500">Add blog</button>
        </Link>
   <div className='grid grid-cols-3 gap-4 mt-4'>
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
