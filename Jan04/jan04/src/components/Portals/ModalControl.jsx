import React, { useState } from "react";
import Modal from "./Modal";
export default function ModalControl() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("isModalOpen", isModalOpen);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpened={isModalOpen}>Content</Modal>
    </div>
  );
}
