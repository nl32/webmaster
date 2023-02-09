import Link from "next/link";
import { useRouter } from "next/router";
import { useState, type ReactElement } from "react";
import Destinations from "../pages/api/destinations.json";

const BookingLayout = (page: ReactElement) => {
  const router = useRouter();
  const id = Number.parseInt(router.query.id as string) ?? -1;

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
              <DestCard destination={dest} selected={id === dest.id} />
            </div>
          ))}
        </div>
        <div className="h-full w-full">{page}</div>
      </div>
      <div className="sticky bottom-0 bg-gradient-to-bl from-white to-gray-300">
        <div className="flex flex-row">
          <div>
            <Link href="/">Back</Link>
          </div>
          <div>Steps Completed</div>
          <button className="ml-auto">Proceed to next step</button>
        </div>
      </div>
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
      <Link href={`/booking/${destination.id}`}>
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
