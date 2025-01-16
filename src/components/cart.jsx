import { useSelector, useDispatch } from "react-redux";
import ItemList from "./itemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleremoveItem = () => {
        dispatch(removeItem());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold m-4">Cart</h1>
            <div className="flex justify-between w-3/4 mx-auto">
                <button className="p-4 m-4  font-bold rounded-lg bg-green-200 hover:bg-green-300"
                onClick={handleClearCart}>Clear Cart</button>

                <button className="p-4 m-4  font-bold rounded-lg bg-blue-200 hover:bg-blue-300"
                onClick={handleremoveItem}>Remove Item</button>
            </div>

            <div className="w-3/4 mx-auto">
                {/* When cart is empty */}
                {cartItems.length === 0 && <div className="text-2xl font-bold mx-auto mt-16">Cart is Empty! Please click on the add button of items to add items to the cart. </div>}

                <ItemList items={cartItems}/>
            </div>
        </div>
    )
};

export default Cart;