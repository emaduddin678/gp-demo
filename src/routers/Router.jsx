import { createBrowserRouter, Outlet } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-4xl">
        Home <Outlet />{" "}
      </div>
    ),

    children: [
      {
        path: "contacts",
        element: <h1>Hello Cntatasd</h1>,
      },
    ],
  },
  {
    path: "/contact",
    element: (
      <div className="text-4xl">
        Home <Outlet />{" "}
      </div>
    ),

    children: [
      {
        path: "contacts",
        element: <h1>Hello Cntatasd</h1>,
      },
    ],
  },
]);

export default Router;
