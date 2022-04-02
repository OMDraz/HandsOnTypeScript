import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import ScreenC from "./ScreenC";

function App() {
  const renderScreenC = (props: any) => {
    console.log("ScreenC props", props);
    return <ScreenC {...props} message="This is Screen C" />;
  };
  return (
    <Routes>
      <Route path="/" element={<ScreenA />} />
      <Route path="/b" element={<ScreenB />} />
      <Route path="/c/:userid" element={renderScreenC} />
    </Routes>
  );
}

export default App;
