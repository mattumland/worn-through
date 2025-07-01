'use client';

import { Parallax } from 'react-scroll-parallax';
import Ghost from '../ghost';
export default function GhostParallax(): React.ReactElement{
  return (
    <div>
      <Parallax
        className='relative'
        opacity={[0,.75]}
        scale={[.5,1]}
        speed={2}
      >
        <Ghost />
      </Parallax>
      </div>
  );
}
