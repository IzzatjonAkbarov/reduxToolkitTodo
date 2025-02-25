import { Input, Modal } from "antd";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalVisibility } from "../../../redux/modalSlice";
import { editTodo } from "../../../redux/todoSlice";

const EditModal = (props) => {
  const { openModalVisibility } = useSelector((state) => state.modalSlice);
  const { editValue } = useSelector((state) => state.todoSlice);

  const dispatch = useDispatch();
  const ref = useRef();
  const handleclick = () => {
    dispatch(editTodo({ id: editValue.id, task: ref.current.input.value }));
    dispatch(setOpenModalVisibility());
  };
  return (
    <>
      <Modal
        open={openModalVisibility}
        title="Edit Todo"
        onOk={handleclick}
        onCancel={() => dispatch(setOpenModalVisibility())}>
        <Input ref={ref} defaultValue={editValue.task} />
      </Modal>
    </>
  );
};

export default EditModal;
