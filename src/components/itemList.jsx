import { CLOUDINARY_IMAGE_URL } from "../utils/constants"

const ItemList = ({items}) => {

    
    return (
        <div className="">
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="m-2 p-2 w-full text-left border-black border-b-2 flex">
                    <div className="w-9/12">
                        <div className="py-2 font-bold"> {item?.card?.info?.name} </div>
                        <div className="font-bold"> ₹{item?.card?.info?.price /100}/- </div>
                        <div className=""> ★ {item?.card?.info?.ratings?.aggregatedRating?.rating} </div>
                        <p className=""> {item?.card?.info?.description} </p>
                    </div>

                    <div className="w-3/12 flex items-center justify-center">
                        <button className="p-2 m-2 bg-black text-white mx-auto mt-28 absolute shadow-lg shadow-gray-500 rounded-lg font-semibold">Add + </button>
                        <div className="">
                        <img
                            className="w-32 m-4 h-28 object-cover rounded-lg shadow-lg shadow-gray-500"
                            src={CLOUDINARY_IMAGE_URL + item?.card?.info?.imageId}
                            alt="Not Found" />  
                        
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ItemList;
