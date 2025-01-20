import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      areaName,
    } = resData?.info;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL
            +cloudinaryImageId
          }
          alt="cloud_name swiggy is disabled"
        />
  
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName} minutes</h4>
  
  
      </div>
    );
  };
  export default ResturantCard