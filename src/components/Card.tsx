import { MapPin } from "phosphor-react";

export interface CardProps {
 image: string;
 title: string;
 subtitle: string;
 location: string;
 city: string;
}

export function Card({ image, location, subtitle, title, city }: CardProps) {
 return (
  <div className="h-full bg-white flex flex-col gap-4 pb-4 rounded-lg overflow-hidden drop-shadow-md">
   <div className="">
    <img src={image} alt="Imagem do carnaval" className="w-full" />
   </div>
   <div className="h-full flex flex-col justify-between gap-4 px-4">
    <span className="font-bold text-lg">{title}</span>
    <p className="text-base opacity-90">{subtitle}</p>
    <div className="flex items-center gap-3">
     <MapPin size={24} className='text-red-400' />
     <p className="text-base opacity-90">{city} - {location}</p>
    </div>
   </div>
  </div>
 )
}