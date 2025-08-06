import React from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./components/Header";
import { Footer } from "./components/Footer";
import { RestaurantCard } from "./components/FoodCards";
import { MainBody } from "./components/MainBody";

const AppLayout = () => {
  return (
    <>
      <Heading />
      <MainBody />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
