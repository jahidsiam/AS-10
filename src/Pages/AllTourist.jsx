import { useEffect, useState } from "react";
import SpotCart from "../Conponents/SpotCart";
import useTitle from "../Conponents/useTitle";

const AllTourist = () => {
  useTitle('All tourist')
  const [allSpot, setAllSpot] = useState([]);
  console.log(allSpot);
  useEffect(() => {
    fetch("https://world-explor-server.vercel.app/add")
      .then((res) => res.json())
      .then((data) => {
        setAllSpot(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center mt-10">This is all tourist:{allSpot.length}</h1>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-9 mb-10">
        {
            allSpot.map(singleSpot => <SpotCart key={singleSpot._id} singleSpot={singleSpot}></SpotCart>)
        }
     </div>
    </div>
  );
};

export default AllTourist;
