'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from "next/image";
import ghosts from "../public/ghosts.webp"
import Ghost from '../ghost';
export default function GhostParallax(): React.ReactElement{
  return (
    <div>
      <Parallax
        className='relative'
        opacity={[0,1]}
      >
        <Ghost />
      </Parallax>
      {/* <Parallax
        className='relative'
        speed={-5}
      >
        <Image
          src={ghosts}
          alt="A bunch of scary ghosts"
          className='m-auto'
          />
      </Parallax>
      <Parallax
        className='relative'
        speed={30}
      >
        <Image
          src={ghosts}
          alt="A bunch of scary ghosts"
          className='m-auto'
        />
      </Parallax> */}
      </div>
  );
}
