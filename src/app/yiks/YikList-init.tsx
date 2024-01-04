// YikList.tsx
import React from 'react';
import { YikData } from './SharedInterfaces';
import Image from 'next/image';

interface YikListProps {
  data: YikData;
}

const YikList: React.FC<YikListProps> = ({ data }) => {
  const { image, name } = data;
  return (
    <div className='min-h-[65px] border border-black hover:bg-slate-100'>
      {name}
      <Image
        src={image}
        alt="My Image"
        width={20} // Set the desired width
        height={30} // Set the desired height
      />
    </div>
  );
};

export default YikList;
