// YikList.tsx
import React from 'react';
import { YikData } from './SharedInterfaces';
import Image from 'next/image';

interface YikListProps {
  data: YikData;
  index: number;
}

const YikList: React.FC<YikListProps> = ({ data, index }) => {
  const { image, name } = data;

  // Function to determine if the link should be rendered
  function shouldRenderLink(i: number): boolean {
    return (
      i !== 1 &&
      i !== 2 &&
      i !== 3 &&
      i !== 4 &&
      i !== 5 &&
      i !== 6 &&
      i !== 7 &&
      i !== 8 &&
      i !== 9 &&
      i !== 10 &&
      (i - 1) % 9 !== 0
    );
  }

  return (
    <div className={`min-h-[65px] border border-black ${shouldRenderLink(index) ? 'hover:bg-slate-300' : 'bg-slate-50'}`}>
      {name}
      {image && (
        <Image
          src={image}
          alt="My Image"
          width={20} // Set the desired width
          height={30} // Set the desired height
        />
      )}
    </div>
  );
};

export default YikList;
