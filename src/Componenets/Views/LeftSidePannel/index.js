import React from "react";

import { ImHome2 ,ImNewspaper , ImFilm , ImDroplet ,ImPaste , ImMic , ImUpload , ImCoinDollar , ImMeter2} from "react-icons/im";

const url = "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png";
function LeftSidePannel() {
  const Nav = [
    { icon: <ImHome2/>, Name: "Home" },
    { icon: <ImNewspaper/>, Name: "myBook" },
    { icon: <ImFilm/>, Name: "myVid" },
    { icon: <ImDroplet/>, Name: "myIdea" },
    { icon: <ImPaste/>, Name: "myJob" },
    { icon: <ImMic/>, Name: "myPodcast" },
    { icon: <ImUpload/>, Name: "myReaused" },
    { icon: <ImCoinDollar/>, Name: "mySlowfood" },
    { icon: <ImMeter2/>, Name: "myMCN" },
  ];
  return (
    <>
    {/*  */}
      <div className="">
        {/* col 1 */}
        <div className="h-auto w-auto bg-gradient-to-r  ">
          <div className="h-auto ">
            <div className="flex snap-center ">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
                className="h-20 w-20 border rounded-full object-cover ml-auto  mr-auto"
                alt=""
              />
            </div>
            <h3 className="text-center">my@sents</h3>
          </div>

          <div className="h-72 mt-5 static  ">
            <div className="h-36 z-0    bg-slate-400 ">
              <img
                src="https://wallpaperaccess.com/full/1267581.jpg"
                className="z-0"
              />
            </div>
            <img
              src="https://www.koimoi.com/wp-content/new-galleries/2020/04/alvaro-morte-reveals-of-taking-inspiration-from-superheroes-for-his-role-in-money-heist-001.jpg"
              className="h-20 w-20 border rounded-full object-cover ml-auto  mr-auto top-0"
              alt=""
            />

            <h3 className="text-center font-serif">Professor</h3>
            <p className="text-center">Istanbul , Turkey</p>
            <p className="border border-indigo-600 mt-2"></p>
            <div className="flex justify-around mt-4">
              <p className="font-sans text-black">
                <span>5k</span> Post
              </p>
              <p>
                <span>5k</span> Post
              </p>
              <p>
                <span>5k</span> Post
              </p>
            </div>
            <div className="flex justify-around">
              <p>
                <span>5k</span> Post
              </p>
              <p>
                <span>5k</span> Post
              </p>
              <p>
                <span>5k</span> Post
              </p>
            </div>

            <div className="h-auto w-auto">
              <div className="ml-auto mr-auto w-64 mt-4 ">
                
                {Nav.map((item, index) => {
                  return (   <button class="w-[230px] h-12 bg-slate-200 text-black rounded-2xl hover:text-white hover:bg-blue-700 text shadow-xl mt-3">
                  <div className="justify-start ml-2 items-center flex flex-arround">
                   <div className="">{item.icon}</div> 
                    <div>
                      <h3 className="ml-1 text-center">{item.Name}</h3>
                    </div>
                  </div>
                </button>)
                } )}
              

              </div>
            </div>


            <div className="h-auto flex justify-center w-full m-3">
        <img src="https://www.ecomkeeda.com/wp-content/uploads/2019/10/freshdesk-vertical-thin-ad.png" />
      </div>
          </div>
        </div>

        {/* button Nav */}

        {/* stop */}
      </div>

      
    </>
  );
}

export default LeftSidePannel;
