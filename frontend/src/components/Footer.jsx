// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-4">Abstract</h3>
            <ul className="list-none">
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="list-none">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="list-none">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="list-none">
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © Copyright 2022 Abstract Studio Design, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
