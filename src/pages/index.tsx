import { type NextPage } from "next";
import Link from "next/link";
import { type ReactElement, useEffect, useRef, useState } from "react";
import Nav from "../components/nav";
import Num from "../components/numAnim";

const Home: NextPage = () => {
  /*  const header = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState("invisible");
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e?.intersectionRatio === 0) {
          setHide("visible");
        } else {
          setHide("invisible");
        }
        console.log("observed");
      },
      { root: null, threshold: 0 }
    );
    if (header?.current) {
      observer.observe(header.current);
    }
  }, [header]); 
*/
  return (
    <>
      <div
        style={{ backgroundImage: `url(/galaxy.jpg)` }}
        className="min-h-screen min-w-full bg-fixed"
      >
        <div className="sticky top-0">
          <Nav />
        </div>
        <div className="flex h-[60rem] w-full flex-col justify-center text-center align-middle">
          <h1 className="h-min self-center bg-gradient-to-br from-white to-slate-400 bg-clip-text text-8xl font-extrabold text-transparent">
            Stellar Times
          </h1>
          <div className="animate-blinkcaret w-[27ch] animate-typing self-center overflow-hidden whitespace-nowrap border-white font-mono text-3xl text-white">
            The Future of Space Travel.
          </div>
        </div>
        <div className="m-5 flex h-60 w-full flex-row">
          <Card>
            <div className="w-80">
              <h1 className="text-xl">A premium and unique experience</h1>
              <p>
                How many can say they have been to outerspace? Our program
                offers the opportunity of a lifetime
              </p>
            </div>
          </Card>
        </div>
        <div className="m-5 flex h-80 w-full flex-row">
          <Card>
            <>
              <h1>fast and safe</h1>
              <div>
                Through our training program partnered with NASA we are able to
                make sure our clients are able, fit, and prepared for their
                journey over the course of a weekend.
              </div>
            </>
          </Card>
        </div>
        <div className="m-5 flex h-80 w-full flex-row">
          <Card>
            <>
              <h1>Rockets</h1>
              <div>
                Our highly reuseable rockets make space travel cheaper and more
                efficient
              </div>
              <Link href={"/rocket/"}>Learn more here</Link>
            </>
          </Card>
        </div>
        <div className="flex h-[60rem] w-full flex-col justify-center text-center align-middle">
          <h1 className="h-min self-center bg-gradient-to-br from-white to-slate-400 bg-clip-text text-8xl font-extrabold text-transparent">
            Become an astronaut!
          </h1>
          <button
            type="button"
            className="w-40 self-center rounded-md bg-slate-700 text-blue-100"
          >
            <Link href={"/booking"}>book a trip today</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

type CardProps = {
  children: ReactElement;
};
const Card = ({ children }: CardProps) => {
  return (
    <>
      <div className="w-fit rounded-md bg-white p-1">{children}</div>
    </>
  );
};
