import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const Restaurantcard = (props) => {
    // console.log("Restaurant Data:", props); // Log the restaurant data
    return (
      <div className="res-card">
        <img className="res-image" src= {`${CLOUDINARY_IMAGE_URL}${props?.resData?.info?.cloudinaryImageId}`}  alt="No Internet" />
        <h3 className="res-name">{props?.resData?.info?.name}</h3>
        <h4>{props?.resData?.info?.cuisines.join(", ")}</h4>
        <h4>{props?.resData?.info?.avgRating} stars</h4>
        <h4>{props?.resData?.info?.sla?.deliveryTime} min</h4>
      </div>
    );
  };

  export default Restaurantcard;