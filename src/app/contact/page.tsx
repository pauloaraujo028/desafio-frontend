"use client";

import React, { useState, ChangeEvent } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
      file: null,
    });
  };

  return (
    <div className="w-full mt-14 p-2 overflow-y-auto">
      <div className="p-4 border rounded-lg bg-white">
        <div className="my-3 p-2 flex flex-col items-center justify-between cursor-pointer">
          <h1 className="mb-8 md:mb-0 py-2 px-4 rounded-xl italic font-bold">
            Entre em Contato
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600">
                Mensagem:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                rows={4}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-600">
                Enviar PDF:
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-800 text-white p-2 rounded hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
