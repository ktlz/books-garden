"use client";

import React, { useState } from "react";
import { books } from "@/constants/books";
import { BookSmall } from ".";

const Browse = () => {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e: any) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = books.filter((el) => {
    //if no input the return the original
    if (inputText === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className="mt-16 max-w-[1440px] mx-auto">
      <h3 className="text-2xl font-bold mb-4">Browse</h3>

      <form className="max-w-md mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={inputHandler}
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
        </div>
      </form>

      <div className="flex flex-wrap gap-4">
        {filteredData.map((book, id) => {
          return <BookSmall key={id} {...book} />;
        })}
      </div>
    </div>
  );
};

export default Browse;
