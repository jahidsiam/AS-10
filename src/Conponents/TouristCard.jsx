import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TouristCard = ({ singleAdd }) => {
  // console.log(singleAdd);
  const { photo,description,spot_name,_id } = singleAdd;
  return (
    <div className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        className="lg:h-[250px]"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spot_name}</h2>
        <p>{description}</p>
        <Link to={`/details/${_id}`}>
        <div className="card-actions justify-end">
          <button  className="btn btn-primary">View Details page</button>
        </div>
        </Link>
      </div>
    </div>
  );
};

TouristCard.propTypes = {
  singleAdd: PropTypes.object,
};

export default TouristCard;
