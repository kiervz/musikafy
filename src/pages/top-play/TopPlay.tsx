import React, { useEffect, useRef } from 'react';
import TopArtist from './TopArtist';
import TopChart from './TopChart';

const TopPlay = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <TopChart />
      <TopArtist />
    </div>
  );
};

export default TopPlay;
