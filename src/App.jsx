import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css'
import Header from "./components/header";
import Body from "./components/body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/contact"
import Error from "./components/error";
import RestaurantMenu from "./components/restaurantMenu";


const AppLayout = () => {

  return (
    <div className="app">
        <Header />
        <Outlet />
    </div>
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
          element: <AboutUs />
        },
    
        {
          path: "/contact",
          element: <Contact />
        },

        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />
        }
          
      ],
      errorElement: <Error/>
    },
    
  ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
