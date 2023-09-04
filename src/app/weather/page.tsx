"use client";

import React, { useState, KeyboardEvent } from "react";
import Image from "next/image";
import axios from "axios";

import Input from "../../components/Input";
import Current from "../../components/weather/Current";

const Page = () => {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");

  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&lang=pt_br`;

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await axios.get(url);
        const responseData = response.data;
        setData(responseData);
        setLocation("");
        setError("");
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          setError("Cidade não encontrada");
        } else {
          setError("Ocorreu um erro");
        }
        setData({});
      }
    }
  };

  let content;

  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="flex flex-col w-full items-center justify-center mt-4 p-4">
        <h2 className="text-sm md:text-xl font-bold">
          Bem-vindo ao Weather App
        </h2>
        <p className="text-xs md:text-sm">Confira o clima de uma cidade</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="flex flex-col w-full items-center justify-center mt-4 p-4">
        <p className="text-xl">Cidade não encontrada!</p>
        <p className="text-sm">Digite o nome de uma cidade válida</p>
      </div>
    );
  } else {
    content = (
      <>
        <div>
          <Current data={data} />
        </div>
      </>
    );
  }

  return (
    <div className="w-full mt-14 p-2 overflow-y-auto">
      <div className="p-4 border rounded-lg bg-white">
        <div className="my-3 p-2 flex flex-col md:flex-row items-center justify-between cursor-pointer">
          <Input
            handleSearch={handleSearch}
            setLocation={setLocation}
            placeholder="Buscar Cidade..."
          />
          <h1 className="mb-8 md:mb-0 py-2 px-4 rounded-xl italic font-bold">
            Weather App.
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Page;
