import { useState } from "react";
import DatePicker from "react-datepicker";
import Nav from "../../../../components/nav";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import Destinations from "../../../api/destinations.json";
const Page = () => {
  const router = useRouter();
  const id = Number.parseInt(router.query.id as string);
  const [trainingDate, setTrainingDate] = useState(new Date());
  const [launchDate, setLaunchDate] = useState(new Date());
  return (
    <>
      <Nav />
      <div>
        <div>
          <h1>Pick your training days</h1>
          <div>
            Pick 2 days to come to our facilities and learn how to be an
            astronaut before you fly off.
          </div>
          <div className="flex flex-row">
            <div className="w-fit">
              <DatePicker
                selected={trainingDate}
                onChange={(date) => (date ? setTrainingDate(date) : null)}
              />
            </div>
            Through{" "}
            {new Date(
              trainingDate.getTime() + 1 * 24 * 60 * 60 * 1000
            ).toLocaleDateString()}
          </div>
        </div>
        <div>Trip Time</div>
        <div>When do you want to leave and come back?</div>
        <div className="flex flex-row">
          <div className="w-fit">
            <DatePicker
              selected={launchDate}
              onChange={(date) => (date ? setLaunchDate(date) : null)}
            />
          </div>
          Through{" "}
          {new Date(
            launchDate.getTime() +
              (Destinations[id]?.length ?? 0) * 24 * 60 * 60 * 1000
          ).toLocaleDateString()}
        </div>
      </div>
    </>
  );
};

export default Page;
