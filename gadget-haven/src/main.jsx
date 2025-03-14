import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
// import GadgetCards from "./components/GadgetCards/GadgetCards.jsx";
import Phone from "./components/Phone/Phone.jsx";
import Laptop from "./components/Laptop/Laptop.jsx";
import Accessories from "./components/Accessories/Accessories.jsx";
import SmartWatches from "./components/SmartWatches/SmartWatches.jsx";
import GadgetDetailes from "./components/GadgetDetailes/GadgetDetailes.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
// import Cart from "./components/Cart/Cart.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route path="/" element={<Home />}></Route>
      <Route path="phone" element={<Phone />}></Route>
      <Route path="laptop" element={<Laptop />}></Route>
      <Route path="accessories" element={<Accessories />}></Route>
      <Route path="smart-watch" element={<SmartWatches />}></Route>
      <Route
        path="/gadget/:product_id"
        loader={async () => {
          const response = await fetch(`/full_products.json`);
          return response.json();
        }}
        element={<GadgetDetailes />}
      ></Route>
      <Route
        loader={async () => {
          const res = await fetch(`/full_products.json`);
          return res.json();
        }}
        path="dashboard"
        element={<Dashboard />}
      ></Route>

      <Route path="statistics" element={<Statistics />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
