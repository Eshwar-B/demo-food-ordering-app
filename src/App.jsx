import React from "react"
import { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css'
import Header from "./components/header";
import Body from "./components/body";
// import AboutUs from "./components/AboutUs";
// import Contact from "./components/contact"
import Error from "./components/error";
import RestaurantMenu from "./components/restaurantMenu";


const AboutUs = lazy( () =>  import("./components/AboutUs") );
const Contact = lazy( () =>  import("./components/contact") );
const Grocery = lazy( () => import("./components/Grocery") );

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
          
      ],
      errorElement: <Error/>
    },
    
  ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
