"use client";

import axios from "axios";
import { useState } from "react";
import { estadoSiglas } from "../../utils/stateUtils";
import Input from "../../components/Input";

interface AddressResult {
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

const Page = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<AddressResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchComplete, setSearchComplete] = useState<boolean>(false);
  const [isValidAddress, setIsValidAddress] = useState<boolean | null>(null);

  const searchAddress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&limit=30&street=${searchTerm}`
        );
        const data = response.data;

        if (data.length > 0) {
          setIsValidAddress(true);
          const parsedResults: AddressResult[] = data.map((result: any) => {
            const parts = result.display_name.split(", ");
            const logradouro = parts[0];
            const bairro = parts[1];
            const cidade = parts[2];

            let estado = "";
            for (let i = parts.length - 1; i >= 0; i--) {
              if (estadoSiglas[parts[i]]) {
                estado = estadoSiglas[parts[i]];
                break;
              }
            }

            let cep = "";
            for (let i = parts.length - 1; i >= 0; i--) {
              if (parts[i].includes("-")) {
                cep = parts[i];
                break;
              }
            }

            return { logradouro, cidade, bairro, cep, estado };
          });

          setResults(parsedResults);
          setError(null);
          setSearchComplete(true);
        } else {
          setIsValidAddress(false);
          setResults([]);
          setError("Endereço não encontrado.");
          setSearchComplete(true);
        }
      } catch (error) {
        console.error("Ocorreu um erro na pesquisa.", error);
        setResults([]);
        setError("Ocorreu um erro na pesquisa.");
        setSearchComplete(true);
        setIsValidAddress(false);
      }
    }
  };

  return (
    <div className="w-full mt-14 p-2 overflow-y-auto">
      <div className="p-4 border rounded-lg bg-white">
        <div className="my-3 p-2 flex flex-col md:flex-row items-center justify-between cursor-pointer">
          <Input
            handleSearch={searchAddress}
            setLocation={setSearchTerm}
            placeholder="Digite o nome da Rua"
          />
          <h1 className="mb-8 md:mb-0 py-2 px-4 rounded-xl italic font-bold">
            LocationApp.
          </h1>
        </div>
        {searchComplete && (
          <div className="flex items-center justify-center overflow-x-auto">
            {isValidAddress === true ? (
              <table className="table-auto border-collapse border">
                <thead className="text-left text-sm">
                  <tr className="bg-gray-200">
                    <th className="p-2">Logradouro / Nome</th>
                    <th className="p-2">Bairro</th>
                    <th className="p-2">Cidade / UF</th>
                    <th className="p-2">CEP</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {results.map((result, index) =>
                    result.cep.includes("-") ? (
                      <tr key={index} className="border-b">
                        <td className="p-2">{result.logradouro}</td>
                        <td className="p-2">{result.bairro}</td>
                        <td className="p-2">
                          {result.cidade} / {result.estado}
                        </td>
                        <td className="p-2">{result.cep}</td>
                      </tr>
                    ) : null
                  )}
                </tbody>
              </table>
            ) : isValidAddress === false ? (
              <div className="text-center p-4">
                <p className="text-xl">Endereço não encontrado!</p>
                <span>Digite o nome de uma rua válida</span>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
