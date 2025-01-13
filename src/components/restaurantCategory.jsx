import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = (props) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
        console.log("Accordion Clicked")
    };
    
    return (
        <div>
            {/* Header */}
            <div className="w-7/12 mx-auto bg-yellow-200 shadow-lg p-4 my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
                    <span className="text-lg font-bold">{props?.data?.title} ({props?.data?.itemCards.length})</span>
                    <span>⛛</span>
                    {/* Accordian Body */}
                </div>
                { showItems  && <ItemList items={props?.data?.itemCards} /> }
            </div>

            
        </div>
    )
};

export default RestaurantCategory;