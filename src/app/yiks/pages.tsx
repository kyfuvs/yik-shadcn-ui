// pages.tsx
import React from 'react';
import YikList from './YikList';
import { YikData } from './SharedInterfaces';
import { yikData } from '../../../data';

export default function Yiks() {
  const yiks: YikData[] = yikData;
  return (
    <div className='grid grid-cols-9 '>
      {yiks.map((data, i) => (
        <YikList key={i} data={data} />
      ))}
    </div>
  );
}
