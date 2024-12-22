import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Shop } from "./pages/shop";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
  ]);