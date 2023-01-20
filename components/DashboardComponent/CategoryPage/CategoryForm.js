import React from "react";

const CategoryForm = ({ form, handleSubmit, handleInputChange }) => {
  return (
    <form ref={form} onSubmit={(e) => handleSubmit(e)}>
      <input
        required
        type="text"
        className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0 text-theme-text-title pl-5"
        name="name"
        placeholder="Enter Category Name"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        required
        type="text"
        className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0  pl-5 mt-5"
        name="imageURL"
        placeholder="Product image url"
        onChange={(e) => handleInputChange(e)}
      />

      <textarea
        required
        type="text"
        className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2  outline-0  pl-5 mt-5"
        placeholder="Brand Information"
        name="description"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        type="submit"
        className="  mt-6 border  w-7/12 md:w-5/12 py-3 rounded border-[gray] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple"
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
