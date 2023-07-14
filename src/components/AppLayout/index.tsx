import React from "react";
import Main from "./Main";
import Footer from "./Footer";

function AppLayout(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl m-auto">
      <Main/>
      <Footer/>
    </div>
  );
}

export default AppLayout;
