import React from "react";
import Header from "./Componenets/Views/Header/index";
import LeftSidePannel from "./Componenets/Views/LeftSidePannel";
import MainView from "./Componenets/Views/MainView";
import RightSidePannel from "./Componenets/Views/RighSidePannel/index";

function App() {
  return (
    <div className="App">

{/* <MainView/> */}

      <div className="grid grid-cols-4">
        <div>
          <LeftSidePannel />
         
        </div>
        <div className="col-span-3">
          <Header/>
          <div className="grid  grid-cols-4">
          <div className="col-span-3"> <MainView/></div>
         {/* last sec */}
         
          <div><RightSidePannel/></div>


          {/* last sec */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
