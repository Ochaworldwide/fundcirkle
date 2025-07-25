// import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <Link to="/">
              <img
                src="/logo.png"
                alt="FundCirkle Logo"
                width={128}
                height={128}
                className="mx-auto md:mx-0 h-auto"
              />
            </Link>
            <p className="text-gray-500 mt-4">
              The simple, transparent way to manage your savings circle.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FundCirkle. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
