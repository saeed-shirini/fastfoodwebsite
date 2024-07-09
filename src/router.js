import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FastFoodList from "./components/fastfood/FastFoodList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <FastFoodList /> },
      {
        path: "/fastfood/:fastFoodId",
        element: <FastFoodList />,
      },
    ],
  },
]);

export default router;
