import { useState } from "react";
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path={"/chat"} element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
