import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold mb-2">Popular Searches</h3>
            <ul>
              <li>Skincare</li>
              <li>Lifestyle</li>
              <li>Beauty Tips</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">More Information</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p>Email: info@womenwebsite.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <img src="path/to/payment-icons.png" alt="Payment Methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;