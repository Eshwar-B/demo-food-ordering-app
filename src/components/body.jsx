import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Restaurantcard from "./RestaurantCard";
import Shimmer from './shimmer'


const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
     fetchData();
  }, []);


  const fetchData = async () => {
    try{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    setRestaurantsList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    } 
    catch(error)
    {
      console.log("error occured while fetching data ",error);
      setRestaurantsList([]);
    }
  };

console.log("Body rendered");

  return  restaurantsList.length === 0 
  ? <Shimmer/> 
  : (
    <div className="body">
  
      <div className="filter">

        <div className='search'>
          <input type="text" 
                 className='input-text-search' 
                 value={searchText} 
                 onChange={(e) => {
                  setSearchText(e.target.value);
                 } }
                 />
          <button className='search-button' onClick={() => {
            const filteredRestaurants = restaurantsList.filter((res) => {
              return(
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
          });
          setFilteredRestaurants(filteredRestaurants);
          }}> Search </button>
        </div>

        <button className="filter-btn" onClick = { () => {
          const filteredList = restaurantsList.filter((res) => res?.info?.avgRating >= 4.4);
          setRestaurantsList(filteredList);
        } }>Top-Rated Restaurants</button>
      </div>
  
      <div className="res-container"> 
        {
          filteredRestaurants.map( (res) => (
             <Link key = {res.info.id} to = {"/restaurants/" + res.info.id}> <Restaurantcard resData = {res} /> </Link>
          ))
        }
        </div>
    </div>
  )
}
  
  export default Body;