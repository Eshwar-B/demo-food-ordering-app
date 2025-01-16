import { useState ,useEffect, useContext, lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider} from "react-redux";
import './App.css'
import Header from "./components/header";
import Body from "./components/body";
import Error from "./components/error";
import RestaurantMenu from "./components/restaurantMenu";
import UserContext from "./utils/userContext";
import Cart from "./components/cart"; 
import appStore from './utils/appStore';

const AboutUs = lazy( () =>  import("./components/AboutUs") );
const Contact = lazy( () =>  import("./components/contact") );
const Grocery = lazy( () => import("./components/Grocery") );




const AppLayout = () => {

  const [userName, setUserName] = useState();
  
  useEffect(() => {
    const data = {
      name : "ESHWAR"
    };
    setUserName(data.name);
  
  },[]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}


const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [

        {
          path: "/",
          element: <Body />
        },

        {
          path: "/about",
          element: ( <Suspense fallback={ <h1> Loading info About Us!! ..... </h1> }>
            <AboutUs /> </Suspense> )
        },
    
        {
          path: "/contact",
          element: ( <Suspense fallback={ <h1> Loading Contact info !! .....</h1> } >
             <Contact />  </Suspense>
          )
        },

        {
          path: "/grocery",
          element: ( <Suspense fallback={ <h1> Laoding Grocery Page !! ..... </h1>
          }> <Grocery /> </Suspense> )
        },

        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />
        },

        {
          path: "/cart",
          element: <Cart />
        }
          
      ],
      errorElement: <Error/>
    },
    
  ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
