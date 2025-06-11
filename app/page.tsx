
import GhostParallax from "./parallax";
import Image from "next/image";
import WTImage from "../public/cropped-sky.webp"
import logo from "../public/WTsvg.png"


export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="">
        <h1 className="hidden">Worn Through</h1>
        <div className="-z-10 fixed w-full">
          <div className="gap-0 grid grid-cols-1 grid-rows-1">
            <div className="relative col-span-1 col-start-1 row-span-1 row-start-1 md:h-screen min-h-[45vh]">
              <Image
                src={WTImage}
                alt="Matt, Greg, Sophie, Matt and Nick of Worn Through standing in front of beautiful yellow forsythias with a huge blue sky in the background."
                quality={100}
                placeholder='blur'
                fill={true}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="-z-1"
                />
              <Image
                src={logo}
                alt="Worn Through"
                className='z-1 col-span-1 col-start-1 row-span-1 row-start-1 m-auto mt-20 md:mt-40 md:p-0 px-10'
              />
            </div>
          </div>
        </div>

      <div className="md:h-screen min-h-[45vh]"></div>
      <GhostParallax />
      <section className="bg-black min-h-[60vh]">
          <h2>Stream the album</h2>
        </section>
        <section className="bg-black min-h-[60vh]">
          <h2>Videos</h2>
        </section>

      </main>
      <footer className="flex flex-wrap justify-center items-center gap-[24px] row-start-3">
      </footer>
    </div>
  );
}
/*
    //   layers={[
    //     {
    //       speed: -7,
    //       children: (

    //           <Image
    //             src={WTImage}
    //             alt="Matt, Greg, Sophie, Matt and Nick of Worn Through standing in front of beautiful yellow forsythias with a huge blue sky in the background."
    //             quality={100}
    //             // fill
    //             // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //             placeholder="blur"
    //             style={{
    //               objectFit: "cover",
    //             }}
    //           />
    //       )

    //     }
    //   ]}
    // >
*/