import GhostParallax from "./components/parallax";
import Image from "next/image";
import WTImage from "../public/cropped-sky.webp"
import bigSky from "../public/big-sky.webp"
import logo from "../public/record_logo.webp"
import VideoSection from "./components/videoSection";
import MusicSection from "./components/musicSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="">
        <h1 className="hidden">Worn Through</h1>
        <div className="-z-10 fixed w-full">
          <div className="gap-0 grid grid-cols-1 grid-rows-1">
            <div className="relative col-span-1 col-start-1 row-span-1 row-start-1 h-screen">
              <Image
                src={WTImage}
                alt="Matt, Greg, Sophie, Matt and Nick of Worn Through standing in front of beautiful yellow forsythias with a huge blue sky in the background."
                quality={100}
                placeholder='blur'
                fill={true}
                style={{ objectFit: "cover" }}
                className="invisible md:visible -z-1 md:"
              />
              <Image
                src={bigSky}
                alt="Matt, Greg, Sophie, Matt and Nick of Worn Through standing in front of beautiful yellow forsythias with a huge blue sky in the background."
                quality={100}
                placeholder='blur'
                fill={true}
                style={{ objectFit: "cover" }}
                className="md:hidden -z-2"
              />
              <Image
                src={logo}
                alt="Worn Through"
                className='z-1 col-span-1 col-start-1 row-span-1 row-start-1 m-auto mt-20 md:mt-40 px-10 lg:max-w-4/5'
              />
            </div>
          </div>
        </div>

      <div className="h-screen"></div>
      <GhostParallax />
      <MusicSection />
      <VideoSection />
      </main>
      <footer className="flex flex-wrap justify-center items-center gap-[24px] row-start-3">
      </footer>
    </div>
  );
}
