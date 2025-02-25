import React from "react";
import EditModal from "./editModal";
import { useSelector } from "react-redux";

const ModalsItem = () => {
  const { openModalVisibility } = useSelector((state) => state.modalSlice);

  return <>{openModalVisibility && <EditModal />}</>;
};

export default ModalsItem;
