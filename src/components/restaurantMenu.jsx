import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from "./shimmer";
import { MENU_API_URL } from '../utils/constants';

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([]);
    const { resId } = useParams();
    

    useEffect( () => {
        fetchMenu()
    }, []);

const fetchMenu = async () => {

    const data = await fetch( MENU_API_URL + resId );
    const json = await data.json();
    setResInfo(json.data);
};

if(resInfo.length === 0) return  <Shimmer /> 

console.log("resInfo = ", resInfo );

const { name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
const { itemCards } = resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemCards);


return (
    <div>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3> {costForTwoMessage} -  Ratings: {avgRating} </h3> 
        <h2>Menu</h2>
        <ul>
            {itemCards.map( (item) => ( <h4 key={item.card.info.id}> 
                {item.card.info.name} - {" Rs."}
                 {item.card.info.price / 100} 
                {" Ratings: "}{item.card.info.ratings.aggregatedRating.rating} 
            </h4>))}
        </ul>
    </div>
)
};

export default RestaurantMenu;