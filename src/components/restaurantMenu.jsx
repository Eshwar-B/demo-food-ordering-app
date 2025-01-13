import { useParams } from 'react-router-dom';
import Shimmer from "./shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './restaurantCategory';

const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState([]);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId); // custom hook to fetch restaurant menu
    

//     useEffect( () => {
//         fetchMenu()
//     }, []);

// const fetchMenu = async () => {

//     const data = await fetch( MENU_API_URL + resId );
//     const json = await data.json();
//     setResInfo(json.data);


if(resInfo.length === 0) return  <Shimmer /> 

console.log("resInfo = ", resInfo );

const { name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
const { itemCards } = resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


console.log("itemcards",itemCards);

// console.log("restaurants: ",resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards)

const categories = resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => 
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

console.log("categories: ", categories);

return (
    <div className='text-center'>
        <h2 className='font-bold text-xl my-8'>{name}</h2>
        <h3 className='font-bold text-lg'>{cuisines.join(", ")}</h3>
        <h3 className='font-bold text-lg'> {costForTwoMessage} -  Ratings: {avgRating} </h3> 
        {/* <h2>Menu</h2>
        <ul>
            {itemCards.map( (item) => ( <h4 key={item.card.info.id}> 
                {item.card.info.name} - {" Rs."}
                 {item.card.info.price / 100} 
                {" Ratings: "}{item.card.info.ratings.aggregatedRating.rating} 
            </h4>))}
        </ul> */}

            {/* Categories accordions */}
           {categories.map((category, index) => (
               <RestaurantCategory  data={category?.card?.card} key={index} />
           ))}
    </div>
)
};

export default RestaurantMenu;