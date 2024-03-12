import { useEffect, useState } from "react";
import Country from "./Country";




const Product = () => {

    const [item,setItem]=useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res =>res.json())
        .then(data=>setItem(data))
    },[])
    return (
        <div>
            <h1>this is shamaim: {item.length}</h1>

            {
                item.map((country)=><Country key={country.cca3} country={country
                } ></Country>)
            }



        </div>
    );
};

export default Product;