import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="users">
      <Outlet />
    </div>
  );
}

export default App;
