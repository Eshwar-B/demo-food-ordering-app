import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from "./shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './restaurantCategory';

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId); // custom hook to fetch restaurant menu
    

if(resInfo.length === 0) return  <Shimmer /> 

// console.log("resInfo = ", resInfo );

const { name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
const { itemCards } = resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


// console.log("itemcards",itemCards);

// console.log("restaurants: ",resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards)

const categories = resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => 
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

// console.log("categories: ", categories);

return (
    <div className='text-center'>
        <h2 className='font-bold text-xl my-8'>{name}</h2>
        <h3 className='font-bold text-lg'>{cuisines.join(", ")}</h3>
        <h3 className='font-bold text-lg'> {costForTwoMessage} -  Ratings: {avgRating} </h3> 

            {/* Categories accordions */}
           {categories.map((category, index) => (
            // controlled Component : parent component(RestaurantMenu) controls the state of the child component(RestaurantCategory)
               <RestaurantCategory  
               data={category?.card?.card} 
               key={category?.card?.card?.title}
               showItems = {index === showIndex ? true : false} 
               openIndex = {() => (setShowIndex(index))}/>
           ))}
    </div>
)
};

export default RestaurantMenu;