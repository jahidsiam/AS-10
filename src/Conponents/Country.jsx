import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Country = () => {
    const [country,setCountry] = useState([])
    console.log(country)
    useEffect(() =>{
        fetch('https://world-explor-server.vercel.app/country')
        .then(res => res.json())
        .then(data => {
            setCountry(data);
        })
    },[])
    return (
        <div className="mt-10">
            <h1 className="text-center">This is country section : {country.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-11 gap-6 ml-4">
                {
                    country.map(singleCountry => <CountryCard key={singleCountry._id} singleCountry={singleCountry}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Country;