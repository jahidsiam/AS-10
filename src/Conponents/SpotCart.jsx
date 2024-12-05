import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SpotCart = ({ singleSpot }) => {
  const { photo, spot_name, cost, per_year, time, seasonality,_id } = singleSpot;
  return (
    <div className="card max-w-md bg-base-100 shadow-xl">
      <figure>
        <img className="h-72 rounded-xl" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Spot Name : {spot_name}</h2>
        <div className="flex justify-between mt-5">
          <div>
            <p>Average Cost : {cost}</p>
            <p>Total Visitors PerYear : {per_year}</p>
          </div>

          <div>
            <p>Travel Time : {time}</p>
            <p>Seasonality : {seasonality}</p>
          </div>
        </div>
        <Link to={`/details/${_id}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary mt-5">View Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

SpotCart.propTypes = {
  singleSpot: PropTypes.object,
};

export default SpotCart;
