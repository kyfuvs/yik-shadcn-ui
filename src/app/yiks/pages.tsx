// pages.tsx
import React from 'react';
import YikList from './YikList';
import { YikData } from './SharedInterfaces';
import { yikData } from '../../../data';
import Link from 'next/link';

export default function Yiks() {
  const yiks: YikData[] = yikData;
  return (
    <div className='grid grid-cols-9'>
      {yiks.map((data, i) => (
        <React.Fragment key={i}>
          {shouldRenderLink(i+1) ? (
            <Link href={`/yiks/${i + 1}`}>
              <YikList data={data} index={i + 1} />
            </Link>
          ) : (
            <YikList data={data} index={i + 1} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

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
