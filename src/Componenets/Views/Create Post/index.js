import React from "react";
import { TiInfoLarge, TiAttachment } from "react-icons/ti";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { GoBold } from "react-icons/go";
function CreatePost() {
  return (
    <div>
      {/* Code block starts */}
      <div>
        <div className=" items-center justify-center m-4   lg:px-0 sm:px-6 px-4 bg-slate-50">
          <div className=" bg-indigo-400 flex justify-start  items-center font-medium py-2 px-4  w-full">
            <ul className="flex p-1">
              <li className="flex items-center">
                <GoBold className="text-black mr-2" />{" "}
              </li>
              <li className="text-black mr-2">
                <TiInfoLarge />
              </li>
              <li className="text-black mr-2">
                {" "}
                <TiAttachment />
              </li>
              <li className="text-black mr-2">
                {" "}
                <VscArrowLeft />
              </li>
              <li className="text-black mr-2">
                {" "}
                <VscArrowRight />
              </li>
            </ul>
          </div>




          <div className="  ">
              <p className="text-center m-3 justify-center ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
          </div>
        </div>
      </div>

      {/* Code block ends */}
    </div>
  );
}
export default CreatePost;
