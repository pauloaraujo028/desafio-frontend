import Image from "next/image";
import React from "react";
import LogoHome from "../../public/logo_home.svg";

const HomePage = () => {
  return (
    <section className="w-full mt-14 p-2 overflow-y-auto">
      <div className="px-4 py-8 border rounded-lg bg-white">
        <div className="flex items-center w-full flex-col md:flex-row">
          <div className="flex w-full justify-center flex-col">
            <h1 className="text-lg md:text-3xl text-center">
              Sistema de Gerenciamento de Pesquisas
            </h1>
            <span className="text-center text-xs md:text-sm mt-2">
              Faça sua busca e compatilhe seu conhecimento
            </span>
          </div>
          <div className="w-full">
            <Image src={LogoHome} alt="/" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
