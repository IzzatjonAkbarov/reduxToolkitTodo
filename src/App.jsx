import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoList from "./components/Todo";

import ModalsItem from "./components/modals";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ToDoList />
      <ModalsItem />
    </>
  );
};

export default App;
