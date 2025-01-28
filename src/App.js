import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Error from "../src/components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery=lazy(()=>import("./components/Grocery.js"));
const About=lazy(()=>import("./components/About.js"));
const AppLayout = () => {
  const [userName,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:"Sunny Kumar"
    };
    setUserName(data.name);
  },[]);
  return (
    
    <div className="app">
      <UserContext.Provider value={{loggedInUser:userName}}>
      <Header />
      <Outlet />
      {/* <Footer /> */}
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
