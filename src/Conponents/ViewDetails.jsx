import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const dataId = useLoaderData();
  console.log(dataId);
  return (
    <div className="card lg:w-3/4 mx-auto mt-10 mb-10 glass">
      <figure>
        <img className="" src={dataId.photo} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Spot Name : {dataId.spot_name}</h2>
        <h2 className="card-title">Country Name : {dataId.country_name}</h2>
        <h2 className="card-title">Country Name : {dataId.location}</h2>
        <div className="flex justify-between mt-5 mb-5">
          <div>
            <p className="mb-3">Visiter Per Year : {dataId.per_year}</p>
            <p>Average Cost : {dataId.cost}</p>
          </div>
          <div>
            <p className="mb-3">Seasonality : {dataId.seasonality}</p>
            <p>Travel Time : {dataId.time}</p>
          </div>
        </div>
        <p>Short Description : </p>
        <p>{dataId.description}</p>
        <Link to='/allTourist'>
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Go Back</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
