import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import Album from "./components/Album";
import About from "./components/About";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Playlist from "./components/Playlist";

// import ParentClass from "./components/ClassBasedComponents/ParentClass";

//Low level design of ui
// Header
// - logo
// - navigation
//      search
//      Playlist
// Body
// Footer

//Lazy loading of ParentClass

const ParentClass = lazy(() => {
  return import("./components/ClassBasedComponents/ParentClass");
});

const AppLayout = () => {

  const [userName, setUserName] = useState("Guest")

  return (

    <Provider store={appStore}>
      {/* Provider is used to pass dynamic value to the React tree inside it 
      loggedInUser is Default User */}
      <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        {/* loggedInUser is "Guest" */}
        <div className="main text-white">
        {/* <UserContext.Provider value={{loggedInUser:"Bill gates"}}> */}
          {/* loggedInUser is Bill gates */}
          <Header />
        {/* </UserContext.Provider> */}
          <Body />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//this is the config for routing which contains the details of what to render on respective path
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/playlist",
        element: <Playlist/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <div>You can contact us at 1234567890</div>,
      },
      {
        path: "/album/:albumId",
        element: <Album />,
      },
      {
        path: "/parent",
        element: (
          <Suspense fallback={<h2>Loading!...</h2>}>
            <ParentClass />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
