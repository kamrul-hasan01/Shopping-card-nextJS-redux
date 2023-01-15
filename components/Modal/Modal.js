import React from "react";
import { CloseIcon } from "../SVG/SVG";

const Modal = ({ children, title, toggleModal, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="theme-transition fixed left-0 top-0 w-full h-full bg-[rgba(9,9,9,.79)] z-[9999]"
          onClick={() => toggleModal()}
        ></div>
      )}

      {isOpen && (
        <div className="bg-navyBlue theme-transition  w-[360px] md:w-[450px]  fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[9999] overflow-x-hidden max-h-[calc(100vh-100px)] overflow-y-auto rounded-[5px]">
          {/* modal header */}
          <div className="flex py-5 xl:py-2 2xl:py-5 px-[30px] bg-gray-blue justify-between border-b border-[#E2E2E2]">
            <h2 className="text-[20px] font-semibold">{title}</h2>

            <button
              className="inline-block w-7 h-7 text-center py-[0px] rounded-md cursor-pointer disabled:bg-gray-400"
              onClick={toggleModal}
            >
              <CloseIcon className="!inline-block" />
            </button>
          </div>
          {/* modal header */}

          {/* modal body */}
          <div className="modalBody p-[30px]">{children}</div>
          {/* modal body */}
        </div>
      )}
      {/* modal wrapper */}
    </>
  );
};

export default Modal;
