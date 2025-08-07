import { useState } from "react";
import useFoodList from "../hooks/getfood";
import { RestaurantCard } from "./FoodCards";

export const MainBody = () => {
  // const [fooddata,setfooddata]=useState([]);

  const { foods, loading, error } = useFoodList();

  console.log(loading);
  console.log(error);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) return <h1>Error: {error.message}</h1>;

  const itemcards =
    foods?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

      
  if (!itemcards || itemcards.length === 0) {
    return <h1>No food items found</h1>;
  }
  console.log(itemcards);
  return (
    <div className="h-screen px-8 ">
      <div className="filterbox">
        <input type="text" />
      </div>
      <div>
         {itemcards.map((item, idx) => (
          <RestaurantCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};
