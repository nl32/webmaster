import { Destination } from "./BookingLayout";

const DestPage = ({ destination }: { destination: Destination }) => {
  return (
    <div className="h-full w-full bg-gray-700 p-2">
      <h1 className="bg-gradient-to-br from-white to-slate-400 bg-clip-text p-1 text-6xl font-extrabold text-transparent">
        {destination.name}
      </h1>
      <div className="text-white">{destination.description}</div>
      <div className="flex flex-row overflow-x-scroll">
        {destination.features &&
          destination.features.map((feat) => (
            <AdCard key={feat.name} feat={feat} />
          ))}
      </div>
    </div>
  );
};

const AdCard = ({ feat }: { feat: { name: string; description: string } }) => {
  return (
    <div className="m-2 aspect-square h-fit w-60 rounded-md bg-white">
      <div className="flex flex-col justify-center p-1">
        <h1 className="mb-2 border-b-2 border-black text-center text-xl">
          {feat.name}
        </h1>
        <div className="">{feat.description}</div>
      </div>
    </div>
  );
};

export default DestPage;
