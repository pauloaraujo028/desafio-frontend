import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex w-full h-14 absolute justify-between items-center bg-white p-4">
      <p>Bem-vindo de volta</p>
      <BsPersonCircle size={22} />
    </div>
  );
};

export default Header;
