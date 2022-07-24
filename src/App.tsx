import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import Pagination from "./components/pagination";
import Sort from "./components/Sort";
import Table from "./components/Table";

function App() {
  return (
    <div className="App container">
      <Filter/>
      <Sort/>
      <Table/>
      <Pagination/>
    </div>
  );
}

export default App;
