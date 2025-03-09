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

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route path="/" element={<Home />}></Route>
      <Route path="phone" element={<Phone />}></Route>
      <Route path="laptop" element={<Laptop />}></Route>
      <Route path="accessories" element={<Accessories />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
