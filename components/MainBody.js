import { RestaurantCard } from "./FoodCards";

export const MainBody = () => {
  return(
    <div className="h-screen px-8 ">
      <div className="filterbox">
        <input type="text" />
      </div>
      <div>
        <RestaurantCard />
      </div>
    </div>
  );
};
