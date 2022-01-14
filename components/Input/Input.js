import React from "react";

const Input = ({ name, type, placeholder }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-1 text-[#555555]">
        {name}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="rounded-[5px] bg-[#dcdcdc] p-4 outline-none border-none hover:bg-[#ededed] focus:bg-[#ededed]"
      ></input>
    </div>
  );
};

export default Input;
