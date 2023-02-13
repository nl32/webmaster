import { useState } from "react";
import DatePicker from "react-datepicker";
import Nav from "../../../../components/nav";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import Destinations from "../../../api/destinations.json";
import { DestCard, Destination } from "../../../../components/BookingLayout";
const Page = () => {
  const router = useRouter();
  const id = Number.parseInt(router.query.id as string);
  const [trainingDate, setTrainingDate] = useState(new Date());
  const [launchDate, setLaunchDate] = useState(
    new Date(trainingDate.getTime() + 2 * 24 * 60 * 60 * 1000)
  );
  return (
    <div className="h-screen w-screen bg-slate-700">
      <Nav />
      <div className="h-full w-full bg-slate-700 p-2">
        <h1 className="bg-gradient-to-br from-white to-slate-400 bg-clip-text p-1 text-4xl font-extrabold text-transparent">
          Your Selected Package
        </h1>
        <DestCard destination={(Destinations[id]! as Destination) ?? 0} />
        <div className="m-2">
          <div className="border-b border-slate-300 py-1">
            <h1 className="text-xl text-white">Pick your training days</h1>
            <div className="text-lg text-white">
              Pick 2 days to come to our facilities and learn how to be an
              astronaut before you fly off.
            </div>
            <div className="flex flex-row justify-between bg-white p-2 sm:w-1/2">
              <div className="w-fit">
                <DatePicker
                  className=""
                  selected={trainingDate}
                  onChange={(date) => (date ? setTrainingDate(date) : null)}
                />
              </div>
              <div>Through</div>
              <div className="pl-1 sm:ml-auto md:pl-20">
                {new Date(
                  trainingDate.getTime() + 1 * 24 * 60 * 60 * 1000
                ).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="border-b border-slate-300 py-1">
            <h2 className="text-xl text-white">Trip Time</h2>
            <div className="text-lg text-white">
              When do you want to leave and come back?
            </div>
            <div className="flex flex-row justify-between bg-white p-2 sm:w-1/2">
              <div className="w-fit">
                <DatePicker
                  selected={launchDate}
                  onChange={(date) => (date ? setLaunchDate(date) : null)}
                />
              </div>
              <div>Through</div>
              <div className="pl-1 sm:ml-auto md:pl-20">
                {new Date(
                  launchDate.getTime() +
                    (Destinations[id]?.length ?? 1) * 24 * 60 * 60 * 1000
                ).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="bg-slate-700">
            <h2 className="mb-2 text-xl text-white">Contact Info</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/booking/confirmation");
              }}
            >
              <div className="flex h-full w-full bg-slate-700 text-white max-sm:flex-col sm:flex-row">
                <div className="mr-4 rounded-md bg-gradient-to-br from-purple-600 to-purple-700 p-2 pt-0 drop-shadow-xl">
                  <label className="text-white">First Name:</label>
                  <br />
                  <input className="text-black" type={"text"}></input>
                </div>
                <div className="mr-4 rounded-md bg-gradient-to-br from-purple-600 to-purple-700 p-2 pt-0 drop-shadow-xl max-sm:mt-2">
                  <label>Last Name:</label> <br />
                  <input className="text-black" type={"text"} />
                </div>
              </div>
              <div className="mt-2 mr-4 w-fit rounded-md bg-gradient-to-br from-purple-600 to-purple-700 p-2 pt-0 text-white drop-shadow-xl">
                <label className="">Email:</label> <br />
                <input className="text-black" type={"email"} />
              </div>
              <div className="mt-2 mr-4 w-fit rounded-md bg-gradient-to-br from-purple-600 to-purple-700 p-2 pt-0 text-white drop-shadow-xl hover:to-purple-800 active:to-purple-900">
                <input type={"submit"} value="Submit Trip Application" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
