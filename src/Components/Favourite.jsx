import axios from "axios";
import { useEffect, useState } from "react";
import Fav from "./Fav";


const Favourite = () => {

    const [fav, setFav] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('http://localhost:5000/fav');
  
        setFav(result.data);
      
      };
      
      fetchData();
    }, []);
    return (
        <div>

        
          {
      fav.map(fav=>(<Fav
      key={fav.id}
      fav={fav}>

      </Fav>
      ))
    }
        
            
        </div>
    );
};

export default Favourite;