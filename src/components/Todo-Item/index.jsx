import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { checkTheTask, deleteTodo, showOnEdit } from "../../redux/todoSlice";
import { setOpenModalVisibility } from "../../redux/modalSlice";

const TodoItem = (props) => {
  const { task, id, time, completed } = props.task;

  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center relative p-3 border-b">
      <div className="flex items-center gap-2">
        <Checkbox
          onChange={() => dispatch(checkTheTask({ id: id }))}
          checked={completed}
        />
        <span className={completed ? "line-through text-gray-500" : ""}>
          {task}
        </span>
      </div>

      <div className="flex gap-2 relative">
        <Button
          onClick={() => {
            dispatch(showOnEdit(props.task));
            dispatch(setOpenModalVisibility());
          }}
          type="text"
          icon={<EditOutlined />}
          className="!text-blue-500"></Button>
        <Button
          onClick={() => dispatch(deleteTodo(id))}
          type="text"
          color="danger"
          icon={<DeleteOutlined />}
          className="!text-red-500"></Button>

        <p className="text-xs absolute -bottom-2 right-0">{time}</p>
      </div>
    </div>
  );
};

export default TodoItem;
