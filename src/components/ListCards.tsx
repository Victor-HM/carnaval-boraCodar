import { Card, CardProps } from "./Card";

interface ListCard {
  filteredBlock: CardProps[];
  blocksRequest: CardProps[];
}

export function ListCard({ blocksRequest, filteredBlock }: ListCard) {
  return (
    <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:grid-rows-[auto] gap-8 px-10 lg:px-0">
      {filteredBlock.length > 0
        ? filteredBlock.map((arr, index) => (
            <Card
              city={arr.city}
              image={arr.image}
              location={arr.location}
              subtitle={arr.subtitle}
              title={arr.title}
              key={index}
            />
          ))
        : blocksRequest.map((arr, index) => (
            <Card
              city={arr.city}
              image={arr.image}
              location={arr.location}
              subtitle={arr.subtitle}
              title={arr.title}
              key={index}
            />
          ))}
    </div>
  );
}
