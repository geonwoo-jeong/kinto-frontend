import React from "react";
import { LoggedOutRouter } from "./routers/logged-out-router";

const App = () => {
  return (
    <div className="h-screen px-36 bg-white">
      <LoggedOutRouter />
    </div>
  );
};

export default App;
