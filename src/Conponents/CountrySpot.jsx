import { Link, useLoaderData } from "react-router-dom";

const CountrySpot = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-center mt-10">Tourist Spots of</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data.map((singleData) => (
          <div
            key={singleData._id}
            className="card w-96 bg-base-100 shadow-xl h-[650px] my-16"
          >
            <figure>
              <img className="h-[250px]" src={singleData.photo} alt="Shoes" />
            </figure>
            <div className=" p-4">
              <h2 className="card-title">Spot Name : {singleData.spot_name}</h2>
              <h2 className="card-title">
                Country Name : {singleData.country_name}
              </h2>
              <h2 className="card-title">Location : {singleData.location}</h2>
              <div className="flex justify-between my-5">
                <p> Seasonality : {singleData.seasonality}</p>
                <p> Average Cost : {singleData.cost}</p>
              </div>
              <p>{singleData.description}</p>
              <Link to={`/details/${singleData._id}`}>
                <div className="card-actions justify-end mt-5">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySpot;
