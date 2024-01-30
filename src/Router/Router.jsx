import App from "../App";
import {
    createBrowserRouter,
  
  } from "react-router-dom";

import Home from "../Components/Home";
import Blog from "../Components/Blog";
import AddBlog from "../Components/AddBlog";
import AddComment from "../Components/AddComment";
import UpdateBlog from "../Components/UpdateBlog";
import Favourite from "../Components/Favourite";

const router = createBrowserRouter([

{
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader:({params})=> fetch(`http://localhost:5000/blog/${params.id}`)  
        
      },
      {
        path: "/addblog",
        element: <AddBlog></AddBlog>,
         
        
      },
      {
        path: "/addcomment",
        element: <AddComment></AddComment>,
         
        
      },
      {
        path: "/update",
        element: <UpdateBlog></UpdateBlog>,
         
        
      },
      {
        path: "/favourite",
        element:<Favourite></Favourite> ,
         
        
      }


    ]
    
},
]
);
    

export default router;