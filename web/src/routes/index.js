import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Team, { teamLoader } from "./routes/team";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

export default router;

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);