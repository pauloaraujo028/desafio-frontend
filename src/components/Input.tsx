"use client";

import { AiOutlineSearch } from "react-icons/ai";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const Input = ({ handleSearch, setLocation, placeholder }: InputProps) => {
  return (
    <form className="flex items-center w-full md:w-2/4 order-2 md:order-1">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-b-2 outline-none"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] cursor-pointer">
        <AiOutlineSearch />
      </div>
    </form>
  );
};

export default Input;
