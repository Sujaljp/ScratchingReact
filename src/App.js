import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import Album from "./components/Album";
import About from "./components/About";
// import ParentClass from "./components/ClassBasedComponents/ParentClass";
import useOnlineStatus from "./utils/hooks/useOnlineStatus";

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
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <div>You are offline please check your internet connection</div>;
  }
  return (
    <div className="main">
      <Header />
      <Body />
    </div>
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
        element: <div className="">Playlist comes here</div>,
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
