import React from "react";

const FooterSecend = () => {
  return (
    <footer className="py-5 px-10 flex flex-col lg:flex-row md:flex-row justify-between items-center border-t-2 border-gray-700 bg-black">
        <p className="text-gray-500">© 2026 Digitools. All rights reserved.</p>
        <div className="links grid grid-cols-2 mt-3 lg:block md:block">
            <a href="" className="link link-hover text-gray-500 mx-3">Privacy Policy</a>
            <a href="" className="link link-hover text-gray-500 mx-3">Terms of Service</a>
            <a href="" className="link link-hover text-gray-500 mx-3"> Cookies</a>
        </div>
      </footer>
  );
};

export default FooterSecend;
