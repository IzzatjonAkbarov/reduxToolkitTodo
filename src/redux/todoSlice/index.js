import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

const gettingDate = () => {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

const initialState = {
  data: JSON.parse(localStorage.getItem("todo")) || [],
  editValue: "",
  searchValue: "",
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addtodo(state, { payload }) {
      console.log(state.data);
      state.data = [
        ...state.data,
        { ...payload, id: Date.now(), time: gettingDate(), completed: false },
      ];
      localStorage.setItem("todo", JSON.stringify(state.data));

      notification.success({ message: "Added successfully" });
    },
    deleteTodo(state, { payload }) {
      console.log(payload);

      state.data = state.data.filter((task) => task.id !== payload);
      localStorage.setItem("todo", JSON.stringify(state.data));
      notification.success({ message: "Deleted Successfully" });
    },
    showOnEdit(state, { payload }) {
      state.editValue = payload;
    },
    editTodo(state, { payload }) {
      console.log(payload);

      state.data = state.data.map((task1) =>
        task1.id === payload.id ? { ...task1, task: payload.task } : task1
      );

      localStorage.setItem("todo", JSON.stringify(state.data));
      notification.success({ message: "Edited Successfully" });
    },
    checkTheTask(state, { payload }) {
      console.log(state.data);

      state.data = state.data.map((task) =>
        task.id == payload ? { ...task, completed: !task.completed } : task
      );

      localStorage.setItem("todo", JSON.stringify(state.data));
    },
    setValueForSearch(state, { payload }) {
      state.searchQuery = payload;
    },
  },
});

export const {
  deleteTodo,
  addtodo,
  showOnEdit,
  editTodo,
  checkTheTask,
  setValueForSearch,
} = todoSlice.actions;
export default todoSlice.reducer;
