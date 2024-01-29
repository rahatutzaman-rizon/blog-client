import App from "../App";
import {
    createBrowserRouter,
  
  } from "react-router-dom";

import Home from "../Components/Home";
import Blog from "../Components/Blog";

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

    ]
    
},
]
);
    

export default router;