import { useEffect, useState } from "react";



function UseFetchCategory(){

     const [Category, setCategory] = useState([]);
     
     useEffect(()=>{
         fetch("http://localhost:9000/category")
           .then((resp) => resp.json())
           .then((data) => setCategory(data));
     },[])

    return{Category}
}

export default UseFetchCategory;