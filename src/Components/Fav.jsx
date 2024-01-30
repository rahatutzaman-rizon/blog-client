
const Fav = ({fav}) => {
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h2 className="card-title bg-gradient-to-r from-teal-400 to-blue-200 text-white p-2">Title : {fav.title}</h2>
        <p>{fav.body}</p>
        <div className="card-actions justify-end">
        
       
        <button className="btn btn-primary  font-bold text-black  bg-gradient-to-r from-pink-300 to-red-500">More</button>
    

       {/* add blog */}
       

        </div>
      </div>
    </div>
        </div>
    );
};

export default Fav;