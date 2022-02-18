import React from "react";
import { AiFillFolderOpen, AiOutlineExclamation , AiFillCaretDown } from "react-icons/ai";
import Newsfeed from "../News Feeds";
import Pagination from "../Pagination";
import CreatePost from "../Create Post";


function MainView() {
  return (
    <>
      <div className="h-auto w-auto mt-5 m-2">
        <img
          src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg"
          alt=""
          className="h-60 w-full"
        />
      </div>

      <div className="h-28 w-auto mt-5 m-4 bg-blue-800">
        <div className="h-16 m-2   flex">
          <AiFillFolderOpen className="text-3xl text-white" />
          <h1 className="font-bold indent-4 h-10 text-white italic font text-3xl ">
            Crypto Winters
          </h1>
          <div className=" right-72 text-white absolute text-4xl mt-2">
            <AiOutlineExclamation />
          </div>
        </div>
        <div className="flex">
          <h3 className="indent-4 text-white p-1">#Bitcoin</h3>{" "}
          <button className="rounded-full text-blue-800 bg-white ml-6 p-1">
            1253 Post
          </button>
        </div>
      </div>

      <div className="flex justify-between m-4  h-14 mt-5 boder rounded bg-slate-300 ">
        <div className="m2 p-4">
          <h1 className=" indent-4 md:decoration-dashed  font-sans">Post</h1>
        </div>
        <div className="m2 mt-3">
          <button className="w-28 mr-4 flex indent-1 border justify-between rounded-full bg-blue-700">
            Latest <AiFillCaretDown className="mr-2"/>
          </button>
        </div>
      </div>

<div className="overflow-y-scroll h-96"><Newsfeed />
      <Newsfeed />
      <Newsfeed /></div>
     

      <Pagination />
      <CreatePost />

      
    </>



  );
}

export default MainView;
