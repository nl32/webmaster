import { NextPage } from "next";
import Nav from "../components/nav";

const References: NextPage = () => {
  return (
    <div>
      <Nav />
      <div>
        <h2>Research sources</h2>
        <div>
          <ul></ul>
        </div>
      </div>
      <div>
        <h2>Media Sources</h2>
        <div>
          <ul></ul>
        </div>
      </div>
      <div>
        <h2>Frameworks</h2>
        <div>
          All content built using these frameworks was made by the Mckinney HS
          Webmaster Team.
        </div>
        <div>
          <ul>
            <li>React</li>
            <li>NextJS</li>
            <li>TailwindCSS</li>
            <li>react datepicker</li>
            <li>NextAuth</li>
            <li>Prisma</li>
            <li>trpc</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default References;
