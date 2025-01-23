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
      <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img 
          className="res-logo rounded-lg h-[250px]"
          src={CDN_URL
            +cloudinaryImageId
          }
          alt="cloud_name swiggy is disabled"
        />
        <div className="text-center">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4 className="font-bold">{costForTwo}</h4>
        <h4>{areaName} minutes</h4>
        </div>
  
      </div>
    );
  };
  export default ResturantCard