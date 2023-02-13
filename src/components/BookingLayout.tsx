import Link from "next/link";
import { useRouter } from "next/router";
import { useState, type ReactElement } from "react";
import Destinations from "../pages/api/destinations.json";

const BookingLayout = (page: ReactElement) => {
  const router = useRouter();
  const id = Number.parseInt(router.query.id as string);
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className="flex h-screen w-screen flex-row">
        <div
          className="relative h-full overflow-hidden bg-slate-800"
          style={{ width: expanded ? "40%" : "fit-content" }}
        >
          <div className="w-fit">
            <button
              onClick={() => {
                setExpanded(!expanded);
              }}
              className="text-white"
            >
              {expanded ? "Collapse" : "Expand"}
            </button>
          </div>
          {Destinations.map((dest) => (
            <div key={dest.id} className={expanded ? "contents" : "hidden"}>
              <DestCard
                destination={dest as Destination}
                selected={id === dest.id}
              />
            </div>
          ))}
        </div>
        <div className="h-full w-full">{page}</div>
      </div>
      {!isNaN(id) && Destinations[id]?.available ? (
        <div className="absolute bottom-10 flex w-full flex-row justify-center">
          <button className=" rounded-md bg-gradient-to-r from-green-500 to-blue-400 p-2 text-xl text-white drop-shadow-xl transition-transform hover:scale-125 hover:shadow-green-500">
            <Link href={`/booking/${id}/dates/`}>Book this trip</Link>
          </button>
        </div>
      ) : null}
    </>
  );
};
export type Destination = {
  id: number;
  name: string;
  description?: string;
  features?: Array<{ name: string; description: string }>;
  length: number;
  cost: number;
  available: boolean;
};
const DestCard = ({
  destination,
  selected,
}: {
  destination: Destination;
  selected?: boolean;
}) => {
  return (
    <div
      className={`m-2 ${
        selected ? "bg-slate-600" : "bg-slate-500"
      } hover:bg-slate-600 active:bg-slate-700`}
    >
      <Link href={`/booking/${destination.id}`} replace={true}>
        <div className="flex flex-row rounded-md p-1">
          <div className="border-r-2">image</div>
          <div>
            <h1 className="px-1 font-bold text-white">{destination.name}</h1>
            <div className="flex flex-row">
              <div className="">{destination.length} days</div>
              <div>${destination.cost}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default BookingLayout;
