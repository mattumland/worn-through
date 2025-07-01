import React from "react";
import Image from "next/image";
import cover from "../../public/wt_cover.webp"
import bc_logo from "../../public/bc_logo.svg"
import yt_logo from "../../public/yt_logo.svg"
import ap_logo from "../../public/ap_logo.svg"
import sp_logo from "../../public/sp_logo.svg"


export default function MusicSection(): React.ReactElement {
  return (
    <section className="flex flex-col bg-[#002C81] text-color-[##E7E7E7]">
      <h2 className="py-10 font-semibold text-6xl text-center">Music</h2>
      <div className="flex flex-row gap-5 m-auto mb-10 max-h-10">
        <a
          href="https://wornthrough.bandcamp.com/album/barely-real"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={bc_logo}
            alt="Bandcamp logo"
            className="max-w-10"
          />
        </a>
        <a
          href="https://open.spotify.com/artist/1sn467RpnjyA4G8qmYXFEZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={sp_logo}
            alt="Spotify logo"
            className="max-w-10"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=dI5kZ5iESIk&list=RDdI5kZ5iESIk&start_radio=1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          <Image
            src={yt_logo}
            alt="Youtube logo"
            className="self-center max-w-10"
          />
        </a>
        <a
          href="https://music.apple.com/us/album/barely-real/1814771396"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={ap_logo}
            alt="Apple Music logo"
            className="max-w-10"
          />
        </a>
      </div>
      <a className="m-auto md:mb-20 p-10 md:p-0 md:max-w-1/2 hover:underline cursor-pointer [&>.child]:"
        href="https://www.strangeviewrecords.com/product/worn-through-barely-real-vinyl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="my-3 text-3xl text-center"><span className="italic">Barely Real</span> 12&quot; Vinyl</h3>
        <div className="overflow-hidden">
          <Image
            src={cover}
            alt="A swimming pool filled with ghosts under a full moon. A swan, a bear and man in a night down sit around the pool."
            quality={100}
            className="hover:scale-102 transition-transform duration-700 ease-in-out"
          />
        </div>
      </a>
    </section>
  )
}
