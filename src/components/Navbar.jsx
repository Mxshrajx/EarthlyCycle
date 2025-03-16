import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Earthly Cycles</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
          
            <Link to={"/products"}>
            <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">Products</a>
            </li>
            </Link>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Community</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Chatbot</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Vending Machines</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Products</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Community</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Chatbot</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Vending Machines</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
