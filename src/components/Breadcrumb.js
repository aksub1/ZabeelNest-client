import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => (
  <nav className="w-full bg-[#eaebf2] py-6 pl-20 text-base hidden sm:block" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center">
          {item.to ? (
            <Link to={item.to} className="text-[#6b7280] hover:underline text-base font-normal">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1a2254] text-lg font-bold">{item.label}</span>
          )}
          {idx < items.length - 1 && (
            <span className="mx-2 text-gray-400">&gt;</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
