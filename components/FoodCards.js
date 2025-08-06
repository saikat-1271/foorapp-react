export const RestaurantCard = () => {
  return (
    <div className=" border-x-2 max-w-xs rounded-xl overflow-hidden shadow-md border hover:shadow-lg transition-shadow duration-300">
      <img
        src="https://images-platform.99static.com//PI-pjiuuMDYzSPcim3gFXjx1nW8=/120x67:874x820/fit-in/500x500/99designs-contests-attachments/130/130863/attachment_130863294"
        alt="Restaurant"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Sunflower Diner</h2>
        <p className="text-sm text-gray-600">North Indian, Chinese, Desserts</p>
        <div className="flex items-center justify-between mt-3">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
            ★ 4.5
          </span>
          <span className="text-sm text-gray-500">
            • 30 mins • ₹400 for two
          </span>
        </div>
      </div>
    </div>
  );
};
