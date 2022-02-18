import { list } from "postcss";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
function DropDown() {
  const List = [
    "Crypto Winters",
    "Crypto Wars",
    "Loinel Messi Sells NFTs",
    "Reasons to used bitcoin Transiction",
    "Elon Must has made it off Earth",
    "Sstoshi Evolution",
    "Reason to use Bitcoin for transactions",
    "Crypto Winters",
    "Crypto Wars",
    "Loinel Messi Sells NFTs",
    "Reasons to used Bitcoin Transiction",
    "Elon Must has made it off Earth",
    "Sstoshi Evolution",
    "Reason to use Bitcoin for transactions",

    "Crypto Winters",
    "Crypto Wars",
    "Loinel Messi Sells NFTs",
    "Reasons to used Bitcoin Transiction",
    "Elon Must has made it off Earth",
    "Sstoshi Evolution",
    "Reason to use Bitcoin for transactions",
  ];
  return (
    <>
      <div className="mt-3">
        <div className="flex justify-between p-1 bg-blue-800">
          <h3 className="indent-4  text-white p-1">Channels</h3>
          <button className="rounded-full  p-1">
            <GoChevronDown className="text-white" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 m-1">
          <button className="bg-white border rounded-full text-sm shadow-lg  shadow-white-500/40">
            button
          </button>
          <button className="bg-white border rounded-full text-sm shadow-lg shadow-white-500/40">
            Crypto
          </button>

          <button className="bg-white border rounded-full text-sm shadow-lg shadow-white-500/40">
            Market
          </button>

          <button className="bg-white border rounded-full text-sm shadow-lg shadow-white-500/40">
            Politic
          </button>

          <button className="bg-white border rounded-full text-sm shadow-lg shadow-white-500/40">
            Stacking
          </button>

          <button className="bg-white border rounded-full text-sm shadow-lg shadow-white-500/40">
            DEX
          </button>

          <button className="bg-white border rounded-full text-sm shadow-lg shadow-white-500/40">
            Ecosyetem
          </button>
        </div>

        <div className="mx-auto m-2  flex justify-Start">
          {/* Code block starts */}
          <div className="flex items-center ml-3 mt-2">
            <input className="" type="checkbox" className="mr-2" />
            <p className=" text-sm underline underline-offset-1  leading-4 font-normal text-gray-800 dark:text-gray-100">
              Sea All Catogries
            </p>
          </div>
        </div>
      </div>

      <div className="flex bg-blue-600 justify-between h-14 items-center">
        <h3 className="indent-4 text-white ">#Recent Topic</h3>{" "}
        <button className="border flex text-white bg-blue w-16 mr-2 items-center ">
          Top
          <GoChevronDown className="text-white items-center ml-3" />
        </button>
      </div>

      <div className="h-auto w-auto">
        <div className="ml-auto mr-auto   ">
          {List.map((item, index) => {
            return (
              <>
                <button class="w-full h-auto bg-slate-200 text-black  hover:text-white hover:bg-blue-700 text shadow-xl ">
                  <div className="justify-between w-5/6  items-center m-3 flex flex-arround">
                    <div className="text-justify  text-sm whitespace-normal">{item}</div>
                    <div className="flex shadow-2xl m-2 bg-gray-300 rounded-full	box-shadow">
                      <button className="text-center border rounded-full ">
                        1234
                      </button>
                    </div>
                  </div>
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default DropDown;
