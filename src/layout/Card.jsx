import React from "react";

const Card = ({ imageUrl, heading, content }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
      <div
        className="bg-cover h-48"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="mb-4 text-2xl">{heading}</h3>
        <div className="mb-4 text-gray-700 text-sm flex-1">{content}</div>
        <a
          href="#"
          className="border-t border-gray-300 pt-2 text-xs text-gray-600 hover:text-red-500 uppercase no-underline tracking-wide"
        >
          Twitter
        </a>
      </div>
    </div>
  </div>
);
