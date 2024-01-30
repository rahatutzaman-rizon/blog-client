import { Link } from "react-router-dom";



const Blogs = ({blog}) => {

    const {title,body,_id}=blog;
   

  

    return (
      <div className="card w-96 bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h2 className="card-title bg-gradient-to-r from-teal-400 to-blue-200 text-white p-2">Title : {title}</h2>
        <p>{body.slice(0,60)}</p>
        <div className="card-actions justify-end">
        
        <Link to={`/blog/${_id}`}>
        <button className="btn btn-primary  font-bold text-black  bg-gradient-to-r from-pink-300 to-red-500">More</button>
        </Link>

       {/* add blog */}
       

        </div>
      </div>
    </div>
    );
};

export default Blogs;