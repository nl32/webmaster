import { type NextPage } from "next";
import Link from "next/link";
import { type ReactElement, useEffect, useRef, useState } from "react";
import Nav from "../components/nav";
import Num from "../components/numAnim";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { url } from "inspector";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-full w-full">
        <div className="absolute top-0 z-50 w-full">
          <Nav />
        </div>
        <Parallax pages={5} className="w-screen">
          <ParallaxLayer
            factor={5}
            offset={0}
            speed={0}
            style={{
              backgroundImage: `url(galaxy.jpg)`,
              backgroundSize: "auto",
              backgroundRepeat: "repeat",
            }}
            className=""
          ></ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1}>
            <div className="flex w-full flex-col justify-center text-center align-middle">
              <h1 className="h-min self-center bg-gradient-to-br from-white to-slate-400 bg-clip-text text-8xl font-extrabold text-transparent">
                Stellar Times
              </h1>
              <div className="w-[27ch] animate-typing self-center overflow-hidden whitespace-nowrap border-white font-mono text-3xl text-white motion-reduce:animate-none">
                The Future of Space Travel.
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url("earth.jpg")`,
              backgroundSize: "auto",
              backgroundPosition: "origin",
            }}
          />
          <ParallaxLayer offset={1} speed={0.75}>
            <div className="m-5 flex w-full flex-row">
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
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url("training.jpg")`,
              backgroundSize: "160%",
              backgroundPosition: "40% 50%",
            }}
          />
          <ParallaxLayer offset={2} speed={0.75}>
            <div className="m-5 flex w-full flex-row">
              <Card>
                <>
                  <h1>fast and safe</h1>
                  <div>
                    Through our training program partnered with NASA we are able
                    to make sure our clients are able, fit, and prepared for
                    their journey over the course of a weekend.
                  </div>
                </>
              </Card>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url("spacelaunch.jpg")`,
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer offset={3} speed={0.75} className="">
            <div className="container w-full rounded-md bg-clip-border p-1">
              <div className="flex h-full w-full flex-row">
                <Card>
                  <>
                    <h1>Rockets</h1>
                    <div>
                      Our highly reuseable rockets make space travel cheaper and
                      more efficient
                    </div>
                    <Link href={"/rocket/"}>Learn more here</Link>
                  </>
                </Card>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={0}
            factor={1}
            style={{
              backgroundImage: `url("Astronaut.jpg")`,
              backgroundSize: "cover",
            }}
          />
          <ParallaxLayer offset={4} speed={1.5} factor={1}>
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
          </ParallaxLayer>
        </Parallax>
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
