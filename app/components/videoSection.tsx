'use client';

import React from 'react'
import ReactPlayer from "react-player/lazy"

const FallBack = (): React.ReactElement => {
  return (
    <p className='-mt-100 text-4xl text-center animate-bounce'>Loading...</p>
  )
}

export default function VideoSection(): React.ReactElement {
  const everythingPath = "https://youtu.be/TrJV1uTphVU?si=uDaOsodwCuQznw6M"
  const realPath = "https://youtu.be/JRa7BPZa4hk?si=g3NTmwMvDJ9svI-n"

  const outerContainerClasses = "m-auto mb-5 px-5 lg:px-0 lg:max-w-7/8"
  const containerClasses = "relative pt-[56.25%]"
  const playerClasses = "absolute top-0 left-0"

  return (
    <section className="bg-[#1FB7D4] pb-10">
      <h2 className="py-10 font-semibold text-6xl text-center">Videos</h2>
        <div className={outerContainerClasses}>
          <h3 className='mb-3 text-2xl'>Everything's Different Now</h3>
          <div className={containerClasses}>
            <ReactPlayer
              url={everythingPath}
              className={playerClasses}
              width='100%'
              height='100%'
              fallback={<FallBack />}
              />
          </div>
        </div>
        <div className={outerContainerClasses}>
          <h3 className='mb-3 text-2xl'>Barely Real</h3>
          <div className={containerClasses}>
            <ReactPlayer
              url={realPath}
              className={playerClasses}
              width='100%'
              height='100%'
              fallback={<FallBack />}
              />
          </div>
        </div>
    </section>
  )
}
