export const Heading = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-md bg-white">
      <div className="logoimg">
        <img
          className="h-12 w-auto bl-4"
          src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg"
          alt="Sunflower Logo"
        />
      </div>
      <nav className="navitems">
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};