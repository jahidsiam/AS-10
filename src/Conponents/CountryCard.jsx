import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CountryCard = ({ singleCountry }) => {
  const { image, description, country_name } = singleCountry;
  return (
    <div>
      <Link to={`/sameCountry/${country_name}`}>
        <div className="card lg:w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 lg:h-[200px]">
            <img
             src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{country_name}</h2>
            <p>{description.slice(0, 100)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

CountryCard.propTypes = {
  singleCountry: PropTypes.object,
};
export default CountryCard;
