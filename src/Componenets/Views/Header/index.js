import React from "react";
import { useState } from "react";

import { DiAngularSimple , DiGoogleDrive } from "react-icons/di";

function Header() {
  return (
    <>
      <div className="grid grid-cols-6 gap-1 m-4 ">
        <div className="col-span-4">
          <div class="flex border-2 rounded">
            <button class="flex items-center justify-center px-4 border-l">
              <svg
                class="w-6 h-6 text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
            <input
              type="text"
              class="px-9 py-2 w-full"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex col-span-2  w-full  justify-around">
          <div>
           
            <DiAngularSimple className="text-red-600 h-12 w-9" />
          </div>
          <div>
          
            <DiAngularSimple className="text-red-600 h-12 w-9" />
          </div>
          <div>
          
            <DiAngularSimple className="text-red-600 h-12 w-9" />
          </div>
          <div>
          
            <DiGoogleDrive className="text-red-600 h-12 w-9" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
