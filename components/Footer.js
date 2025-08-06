export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-lg"> ARC FOODS </p>
          <p className="text-sm text-gray-500">© 2025 All rights reserved</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm">
          <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-blue-500 cursor-pointer">
            Terms of Service
          </li>
          <li className="hover:text-blue-500 cursor-pointer">Support</li>
        </ul>
      </div>
    </footer>
  );
};
