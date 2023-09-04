import React from "react";
import Image from "next/image";

import { getCurrentDate } from "../../utils/currentDate";
import { MdLocationOn, MdWaterDrop } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

interface CurrentProps {
  data: {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  };
}

const Current: React.FC<CurrentProps> = ({ data }) => {
  const currentDate = getCurrentDate();

  return (
    <div className="flex flex-col mb-8 items-center">
      <div className="flex items-center w-full justify-between">
        <h2 className="text-sm">Hoje</h2>
        <p className="text-sm">{currentDate}</p>
      </div>
      <div className="flex items-center gap-2 mt-8">
        <p>
          <MdLocationOn size={25} />
        </p>
        <p className="text-2xl">{data.name}</p>
        <Image
          src={`https://flagsapi.com/${data.sys.country}/flat/48.png`}
          alt="Bandeira do Pais"
          width={40}
          height={40}
          className="drop-shadow-lg"
        />
      </div>
      <div className="flex gap-2 text-3xl p-2">
        {data.main.temp.toFixed(0)}
        <span>&#176;C</span>
      </div>
      <div className="flex gap-2 text-sm">
        <p className="flex items-center text-green-600">
          <BsArrowUp size={12} />
          {data.main.temp_max.toFixed(0)}
          <span>&#176;C</span>
        </p>
        <p className="flex items-center text-red-600">
          <BsArrowDown size={12} />
          {data.main.temp_min.toFixed(0)}
          <span>&#176;C</span>
        </p>
      </div>
      <div className="flex items-center">
        <p>
          {data.weather[0].description.charAt(0).toUpperCase() +
            data.weather[0].description.slice(1)}
        </p>
        <Image
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="/"
          width={64}
          height={64}
          className="drop-shadow-lg"
        />
      </div>
      <div className="flex gap-4 items-center ">
        <div className="flex gap-2">
          <MdWaterDrop size={20} />
          <p>
            {data.main.humidity.toFixed(0)} <span className="text-sm">%</span>
          </p>
        </div>
        <div className="border border-gray-400 h-8"></div>
        <div className="flex gap-2">
          <FaWind size={20} />
          <p>
            {data.wind.speed.toFixed(0)} <span className="text-sm">km/h</span>
          </p>
        </div>
      </div>
      <div className="p-4 bg-black/40 rounded-lg mt-8">
        <Image
          className="rounded-lg object-cover"
          src={`https://source.unsplash.com/800x600/?${data.name}`}
          alt="/"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Current;
