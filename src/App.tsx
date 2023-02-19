import Mulata from "./assets/mulata.png";
import Folhas from "./assets/folhas.png";
import Image1 from "./assets/unsplash_b2jkMC95a_8.png";
import Image2 from "./assets/unsplash_b2jkMC95a_8 (1).png";
import Image3 from "./assets/unsplash_b2jkMC95a_8 (2).png";
import Image4 from "./assets/unsplash_b2jkMC95a_8 (3).png";
import Image5 from "./assets/unsplash_b2jkMC95a_8 (4).png";
import Image6 from "./assets/unsplash_b2jkMC95a_8 (5).png";
import Image7 from "./assets/unsplash_b2jkMC95a_8 (6).png";
import Image8 from "./assets/unsplash_b2jkMC95a_8 (7).png";
import Image9 from "./assets/unsplash_b2jkMC95a_8 (8).png";
import Map from "./assets/map.json";

import { MagnifyingGlass, MapPin } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { Card, CardProps } from "./components/Card";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { ListCard } from "./components/ListCards";
import Lottie from "lottie-react";

function App() {
  const blocksRequest: CardProps[] = [
    {
      image: Image1,
      location: "SP",
      city: "São Paulo",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "O Python do vovô não sobe mais",
    },
    {
      image: Image2,
      location: "SC",
      city: "Florianópolis",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "Todo mundo null",
    },
    {
      image: Image3,
      location: "PR",
      city: "Curitiba",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "Hoje dou exception",
    },
    {
      image: Image4,
      location: "BA",
      city: "Salvador ",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "Manda Node",
    },
    {
      image: Image5,
      location: "SP",
      city: "São Paulo",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "Só no back-end",
    },
    {
      image: Image6,
      location: "SP",
      city: "São Paulo",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "Esse anel não é de Ruby",
    },
    {
      image: Image7,
      location: "RJ",
      city: "Rio de Janeiro",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "Pimenta no C# dos outros é refresco",
    },
    {
      image: Image8,
      location: "RS",
      city: "Porto Alegre",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "EnCACHE aqui",
    },
    {
      image: Image9,
      location: "SP",
      city: "São Paulo",
      subtitle:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      title: "Não valho nada mas JAVA li",
    },
  ];

  type States = "SP" | "RJ" | "SC" | "PR" | "BA" | "RS" | "";

  const [nameBlock, setNameBlock] = useState<string>("");
  const [selectCity, setSelectCity] = useState<States>("");
  const [filteredBlock, setFilteredBlock] = useState<CardProps[]>([]);
  const [isOpenMap, setIsOpenMap] = useState<boolean>(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const e = event.target as HTMLInputElement;

    function verifyBlocks(value: CardProps) {
      if (
        value.title.toUpperCase().includes(nameBlock.toUpperCase()) &&
        value.location.includes(selectCity)
      ) {
        return value;
      } else {
        return false;
      }
    }

    setFilteredBlock(
      nameBlock.length > 0 || selectCity.length > 0
        ? blocksRequest.filter(verifyBlocks)
        : []
    );
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_KEY_API,
  });


  const coordenates = {
    "": { lat: 0, lng: 0 },
    SP: { lat: -23.6815302, lng: -46.876186 },
    RJ: { lat: -22.9132513, lng: -43.7268693 },
    SC: { lat: -27.5707042, lng: -48.751164 },
    PR: { lat: -25.4947398, lng: -49.4302291 },
    BA: { lat: -13.3898445, lng: -46.46991 },
    RS: { lat: -30.1082963, lng: -51.4474199 }
  };

  function changeCoordenates() {
    return coordenates[selectCity]
  }

  const position = changeCoordenates()

  return (
    <div className="w-screen md:w-full flex flex-col gap-24">
      <div className="w-screen flex justify-center items-center py-24 px-40 border-2 relative">
        <div className="flex flex-col justify-center items-center gap-10 z-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <div>
              <strong className="text-red-400 font-medium text-base">
                Find your block
              </strong>
            </div>
            <div className="w-full md:w-[70%] text-center">
              <h1 className="text-5xl font-bold">
                Encontre os{" "}
                <span className="text-purple-700">melhores blocos</span> de
                carnaval de 2023
              </h1>
            </div>
          </div>

          <form className="bg-white flex flex-col md:flex-row gap-8 md:gap-6 drop-shadow-md p-10 rounded-md">
            <Input
              placeholder="Pesquise por nome"
              icon={<MagnifyingGlass size={24} />}
              onChange={(e) => setNameBlock(e.target.value)}
            />
            <Select
              values={[
                { name: "Selecione uma cidade", value: "" },
                { name: "São Paulo", value: "SP" },
                { name: "Florianópolis", value: "SC" },
                { name: "Curitiba", value: "PR" },
                { name: "Salvador", value: "BA" },
                { name: "Rio de Janeiro", value: "RJ" },
                { name: "Porto Alegre", value: "RS" },
              ]}
              icon={<MapPin size={24} />}
              onChange={(e) => {
                const event = e.target.value as States
                setSelectCity(event)
              }}
            />
            <Button
              placeholder="BUSCAR AGORA"
              type="submit"
              onClick={onSubmit}
            />
          </form>
        </div>
        <img
          src={Mulata}
          alt="Desenho de uma mulher vestida de carnaval dançando"
          className="absolute right-0 bottom-0 z-0"
        />
        <img
          src={Folhas}
          alt="Desenho de uma mulher vestida de carnaval dançando"
          className="absolute left-0 top-0 z-0"
        />
      </div>

      <div className="flex flex-col items-center  gap-10 px-0 md:px-28">
        <div className="w-full flex flex-col lg:flex-row gap-2 justify-between items-center">
          <span className="font-bold text-3xl">Blocos recomendados</span>

          <div className="flex gap-3 border-2 rounded-md p-2">
            <Button placeholder="Lista" onClick={() => setIsOpenMap(false)} />
            <Button placeholder="Mapa" onClick={() => setIsOpenMap(true)} />
          </div>
        </div>

        {isOpenMap ? (
          <div className="w-4/5 md:w-full h-96 flex justify-center">
            {isLoaded ? (
              selectCity.length > 0 ? (
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  center={position}
                  zoom={10}
                >
                  <Marker
                    position={position}
                    options={{
                      label: { text: "Posição test", className: "-mt-8" },
                    }}
                  />
                </GoogleMap>
              ) : (
                <div className="w-1/2 flex flex-col items-center gap-3">
                  <span className="text-red-400 text-xl font-bold">
                    Selecione um local
                  </span>
                  <Lottie animationData={Map} />
                </div>
              )
            ) : (
              <></>
            )}
          </div>
        ) : (
          <ListCard
            blocksRequest={blocksRequest}
            filteredBlock={filteredBlock}
          />
        )}
      </div>
    </div>
  );
}

export default App;
