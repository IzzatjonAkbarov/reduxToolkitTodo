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
        task1.id === payload.id
          ? { ...task1, task: payload.task, time: ` edited ${gettingDate()}` }
          : task1
      );

      localStorage.setItem("todo", JSON.stringify(state.data));
      notification.success({ message: "Edited Successfully" });
    },
    checkTheTask(state, { payload }) {
      state.data = state.data.map((task1) =>
        task1.id === payload.id
          ? { ...task1, completed: !task1.completed }
          : task1
      );

      localStorage.setItem("todo", JSON.stringify(state.data));
      const updatedTask = state.data.find((task) => task.id === payload.id);

      notification.success({
        message: updatedTask.completed
          ? "Task is Done"
          : "Task marked as incomplete",
      });
    },
  },
});

export const { deleteTodo, addtodo, showOnEdit, editTodo, checkTheTask } =
  todoSlice.actions;
export default todoSlice.reducer;
