import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Restaurantcard, { QuicklyServed } from "./RestaurantCard";
import Shimmer from './shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const QuicklyServedCard = QuicklyServed(Restaurantcard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsonData = await data.json();
      setRestaurantsList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurants(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.log("error occurred while fetching data ", error);
      setRestaurantsList([]);
    }
  };

  console.log("Body rendered",restaurantsList);

  if (!useOnlineStatus)
    return <h1>Looks like you are offline!!. Check your internet connection and try again.</h1>;

  return restaurantsList.length === 0
    ? <Shimmer />
    : (
      <div className="body">
        {/* Big parent div for all features */}
        <div className="flex items-center gap-4 p-4">
          {/* Input bar div */}
          <div>
            <input
              type="text"
              className="border border-solid border-black p-2 rounded-lg"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for restaurants..."
            />
          </div>

          {/* Search button div */}
          <div>
            <button
              className="px-4 py-2 bg-green-200 rounded-lg hover:bg-green-300"
              onClick={() => {
                const filteredRestaurants = restaurantsList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>

          {/* Top-rated restaurants button div */}
          <div>
            <button
              className="px-4 py-2 bg-blue-200 rounded-lg hover:bg-blue-300"
              onClick={() => {
                const filteredList = restaurantsList.filter((res) => res?.info?.avgRating >= 4.4);
                setFilteredRestaurants(filteredList);
              }}
            >
              Top-Rated Restaurants
            </button>
          </div>
        </div>

        {/* Restaurant cards container */}
        <div className="res-container flex flex-wrap gap-3 p-4">
          {filteredRestaurants.map((res) => (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>

              {/* check if the food item is delivered within 40 mins */}
              {
                res?.info?.sla?.deliveryTime < 40 
                ? <QuicklyServedCard  resData={res} /> 
                : <Restaurantcard resData={res} />
              }
              
            </Link>
          ))}
        </div>
      </div>
    );
}

export default Body;