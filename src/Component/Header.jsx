// import Link from "next/link";
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg dark:bg-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          <Link to="/">
            <img
              src="/logo.png"
              alt="FundCirkle Logo"
              width={128}
              height={128}
              className="h-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#features"
              className="text-gray-600 hover:text-[#00943F] dark:text-gray-300 dark:hover:text-[#00943F] transition-colors"
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="text-gray-600 hover:text-[#00943F] dark:text-gray-300 dark:hover:text-[#00943F] transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="#faq"
              className="text-gray-600 hover:text-[#00943F] dark:text-gray-300 dark:hover:text-[#00943F] transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <Link
              to="/sign-up"
            className="hidden md:inline-block bg-[#00943F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#007a34] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
