import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-800 text-white text-center py-4 mt-8 ring-2 ring-gray-700 ring-opacity-50">
      <div className=" container mx-auto flex flex-col md:flex-row items-center justify-center">
        <p className="text-sm sm:text-base">&copy; 2024 Portfolio. All rights reserved.</p>
        <div className="flex mt-4 md:mt-0">
          <p className="mr-4">Connect with me on:</p>
          <a
            href="https://linkedin.com/in/aditya-patil-1955ba251"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-1"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6 inline"
            />
          </a>
          <a
            href="https://wa.me/9328036815"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-1"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-6 h-6 inline"
            />
          </a>
          <a
            href="https://instagram.com/adityapatil9090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-1"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-6 h-6 inline"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
