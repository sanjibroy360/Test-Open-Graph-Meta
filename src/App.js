import React from "react";
import Navbar from "common/Navbar/Loadable";
import Footer from "common/Footer/Loadable";
import Main from "./Main";

function App() {
  return (
    <div className="font-manrope w-full cursor-default">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default React.memo(App);
