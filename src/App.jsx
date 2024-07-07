import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./Pages/Home";
import MenuGame from "./Pages/MenuGame";
import Game1 from "./Pages/Game1";
import Game3 from "./Pages/Game3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<MenuGame />}></Route>
        <Route path="/game1" element={<Game1 />}></Route>
        <Route path="/game3" element={<Game3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
