import React, { useRef, useState } from "react";
import Modal from "../../Common/Modal/Modal";
import StockForm from "./StockForm";

const StockTItle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    newFromData[field] = value;
    setFormData(newFromData);
  };
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // formData["status"] = "active";
    console.log("formData :", formData);
    // form.current.reset();
    // setIsOpen(false);
  };
  return (
    <>
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">Stock</h4>
        <p
          onClick={() => setIsOpen(true)}
          className="text-white bg-navyBlue py-2 px-3 rounded font-semibold cursor-pointer hover:text-purple"
        >
          Add Stock
        </p>
      </div>
      <Modal
        title="Add Stock"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
      >
        <StockForm
          form={form}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </>
  );
};

export default StockTItle;
