import React, { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import { Input, Button, Modal, Progress } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import TodoItem from "../Todo-Item";
import { addtodo } from "../../redux/todoSlice";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ToDoList = () => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { data } = useSelector((state) => state.todoSlice);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    console.log(data);
    dispatch(addtodo(e));
    reset();
  };

  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  const showSearchModal = () => {
    setIsSearchModalVisible(true);
  };

  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    const filteredTasks = search.trim()
      ? data.filter((task) =>
          task.task.toLowerCase().includes(search.toLowerCase())
        )
      : data;

    setSearchedData(filteredTasks);
  }, [search, data]);

  const handleSearchModalClose = () => {
    setIsSearchModalVisible(false);
    setSearch("");
  };

  const completedTasks = data.filter((task) => task.completed).length;
  const progress = data.length > 0 ? (completedTasks / data.length) * 100 : 0;

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">To-Do List</h2>

      <div className="flex gap-2 mb-4">
        <form
          className="flex items-center gap-2 w-full"
          onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="task"
            rules={{ required: "task should not be empty" }}
            render={({ field }) => (
              <div className="relative w-[100%]">
                <Input {...field} required />

                {errors.task && (
                  <p className="absolute -bottom-4 text-xs text-red-500">
                    {errors.task.message}
                  </p>
                )}
              </div>
            )}
          />
          <Button
            htmlType="submit"
            type="primary"
            icon={<PlusOutlined />}></Button>
        </form>

        <Button
          type="default"
          icon={<SearchOutlined />}
          onClick={showSearchModal}></Button>
      </div>

      <Progress percent={Math.round(progress)} className="mb-4" />

      <div className="mt-4">
        {data.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </div>

      <Modal
        title="Search Tasks"
        open={isSearchModalVisible}
        onOk={handleSearchModalClose}
        onCancel={handleSearchModalClose}>
        <Input
          placeholder="Type to search..."
          allowClear
          className="w-full mb-4"
          onChange={handleSearchChange}
          value={search}
        />
        <div className="max-h-60 overflow-y-auto">
          {searchedData.length > 0 ? (
            searchedData.map((task) => <TodoItem key={task.id} task={task} />)
          ) : (
            <p className="text-center text-gray-500">No matching tasks found</p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ToDoList;
