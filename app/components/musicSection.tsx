import React from "react";
import Image from "next/image";
import cover from "../../public/wt_cover.webp"
import TitleBar from "./titleBar";

export default function MusicSection(): React.ReactElement {
  return (
    <section className="bg-black min-h-[60vh]">
      <TitleBar title={"Music"} />
      <div className="m-auto max-w-1/2">
        <Image
          src={cover}
          alt=""
          quality={100}
        />
      </div>
    </section>
  )
}