// pages.tsx
import React from 'react';
import YikList from './YikList';
import { YikData } from './SharedInterfaces';
import { yikData } from '../../../data';
import Link from 'next/link';

export default function Yiks() {
  const yiks: YikData[] = yikData;
  return (
    <div className='grid grid-cols-9  '>
      {yiks.map((data, i) => (
        <Link key={i} href={`/yiks/${i+1}`}>
            <YikList  data={data} />
        </Link>
        
      ))}
    </div>
  );
}
