import { useMemo } from "react";
import Nav from "../components/nav";

const people = [
  { name: "Ethan Bickel", id: "2115030" },
  { name: "Rachel Hiestand", id: "2115001" },
  { name: "Nora Kristufek", id: "2115006" },
  { name: "Bailey Yu", id: "2115013" },
  { name: "John Merrell", id: "2115009" },
];

const Page = () => {
  const teamMembers = useMemo(() => people, [people]);
  return (
    <>
      <div>
        <Nav />
        <div className="h-full min-h-screen w-full min-w-full bg-slate-700 text-white">
          <div className="p-4">
            <div>
              <h1 className="text-4xl">Team Id</h1>
              <p>WEBHS-2115-1</p>
            </div>
            <div className="">
              <h1 className="text-4xl">Team members</h1>
              <ul className="">
                {teamMembers.map((member) => (
                  <li key={member.name}>
                    {member.name} ({member.id})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
