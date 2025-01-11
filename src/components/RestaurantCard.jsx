import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const Restaurantcard = (props) => {
    // console.log("Restaurant Data:", props); // Log the restaurant data
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg " style={{backgroundColor: "#C9E4CA"}}>
        <img className=" mb-4 rounded-lg h-[250px]" src= {`${CLOUDINARY_IMAGE_URL}${props?.resData?.info?.cloudinaryImageId}`}  alt="No Internet" />
        <h3 className="font-bold text-xl">{props?.resData?.info?.name}</h3>
        <h4 className="">{props?.resData?.info?.cuisines.join(", ")}</h4>
        <h4>{props?.resData?.info?.avgRating} stars</h4>
        <h4>{props?.resData?.info?.sla?.deliveryTime} min</h4>
      </div>
    );

  };

  // Higher Order Component : A component that takes a component as an argument enhances the component and returns the enhanced component
  // This component checks if the food item is delivered within 40 mins

  export const QuicklyServed = (RestaurantCard) => {

      return (props) => {
        
         return (
          <div>
            <label className="text-white absolute bg-black m-2 p-2 rounded-lg"> Quickly Served </label>
            <RestaurantCard {...props}/>
          </div>
         )


      }
  };

  export default Restaurantcard;