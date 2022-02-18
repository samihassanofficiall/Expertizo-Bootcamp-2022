import React, { useState } from "react";
import { GoSmiley, GoEye } from "react-icons/go";
import { ImSad, ImBookmark } from "react-icons/im";

function Newsfeed() {
  const [show, setshow] = useState(true);

  return (
    <div className="bg-white-400 m-4   flex-col justify-center items-center bg-cyan-500 shadow-lg shadow-cyan-500/50">
      <div className="flex justify-end mt-1 items-center">
        <p>Aug-17-21 12;21 AM</p>
      </div>

      <div className="img  items-center   flex">
        <img
          className="img border rounded-full h-10 w-10 ml-2 "
          src="https://i.zoomtventertainment.com/story/pjimage_86_10.jpg?tr=w-1200,h-900"
        />
        <h3 className="indent-2">Professor</h3>
      </div>
      <div className="">
        <p className="indent-12 ">#the rock in the word that is</p>
      </div>

      <div className="flex justify-around">
        <p className="mt-2 text-base leading-normal text-left  md:w-10/12 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text. search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
      <div className="grid  grid-cols-2   justify-around w-5/6 ml-12 mt-4  ">
        <div className="m1 ">
          <ul className="grid grid-cols-4 gap-1 ">
            <li>
              <GoSmiley className="inline-block" /> 112.5k
            </li>
            <li>
              <GoEye className="inline-block" /> 3.2k
            </li>
            <li>
              <ImSad className="inline-block" /> 300
            </li>
            <li>
              <ImBookmark className="inline-block" /> 1.5k
            </li>
          </ul>
        </div>

        <div className="flex justify-end  ">
          <p>Aug-17-21 12;21 AM</p>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
