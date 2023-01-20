import React, { useRef, useState } from "react";
import Modal from "../../Common/Modal/Modal";
import UserForm from "./UserForm";

const UserTitle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const form = useRef();

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    newFromData[field] = value;
    setFormData(newFromData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData :", formData);
  };
  return (
    <>
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">User</h4>
        <p
          onClick={() => setIsOpen(true)}
          className="text-white bg-navyBlue py-2 px-3 rounded font-semibold cursor-pointer hover:text-purple"
        >
          Add User
        </p>
      </div>
      <Modal
        title="Add User"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
      >
        <UserForm
          form={form}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </>
  );
};

export default UserTitle;
