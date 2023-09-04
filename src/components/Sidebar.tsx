import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxDotsVertical } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { GrContact, GrLocation } from "react-icons/gr";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Sidebar = () => {
  return (
    <aside className="flex-none w-20 h-screen bg-white border-r-[1px] p-4 flex-col justify-between md:w-56">
      <nav className="flex flex-col items-center justify-between h-full">
        <div>
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg flex justify-center items-center gap-4">
              <div className="leading-3 hidden md:block">
                <h2 className="text-lg">SGP</h2>
                <span className="text-xs">Dashboard</span>
              </div>
              <RxSketchLogo size={30} />
            </div>
          </Link>
        </div>

        <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
        <ul className="">
          <li>
            <Link href="/">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex">
                <RxDashboard size={20} />
                <p className="hidden md:block ml-4">Home</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/weather">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex">
                <TiWeatherPartlySunny size={20} />
                <p className="hidden md:block ml-4">Clima</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/location">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex">
                <GrLocation size={20} />
                <p className="hidden md:block ml-4">CEP</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex">
                <GrContact size={20} />
                <p className="hidden md:block ml-4">Contato</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg flex">
                <FiSettings size={20} />
                <p className="hidden md:block ml-4">Configurações</p>
              </div>
            </Link>
          </li>
        </ul>

        <div className="flex items-end justify-start w-full h-full">
          <div className="flex pt-3 border-t w-full">
            <Image
              src={`https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80`}
              alt="foto perfil"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="hidden md:flex justify-between items-center ml-2 w-full">
              <div className="leading-4 text-xs">
                <h4>Paulo Araujo</h4>
                <span>paulo@gmail.com</span>
              </div>
              <div>
                <RxDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
