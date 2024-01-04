import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import { yikData } from '../../../../data';
import Image from 'next/image';
import Link from 'next/link';
import { TiArrowBack } from "react-icons/ti";

interface YikDetailsProps {
  params: ParsedUrlQuery;
}

export default function YikDetails({ params }: YikDetailsProps) {
  // Parse the ID from params
  const id = typeof params.id === 'string' ? parseInt(params.id, 10) : undefined;

  // Check if id is a valid number and within the range of yikData
  const yik = id !== undefined && id >= 0 && id < yikData.length + 1? yikData[id - 1] : null;
  
  //----------reverse---------------------
  const reverse = yik?.num
    ?.split('')
    .map((digit) => (digit === '1' ? '0' : '1'))
    .join('');

  const reverseYik = yikData.find((item) => item.num === reverse);

  //-----------opposite--------------
  const opposite = yik?.num
    ?.split('')
    .reverse()
    .join('');

    const oppositeYik = yikData.find((item) => item.num === opposite);
 
      //-----------inter--------------
  
      let inter = yik?.num;
      let finalResult = '';
      
      if (inter) {
        const part1 = inter.slice(2, 5).split('').reverse().join('');
        const part2 = inter.slice(1, 4).split('').reverse().join('');
        
        finalResult = part1 + part2;
      }
      
      const interYik = yikData.find((item) => item.num === finalResult);
      
      // Now you can use finalResult safely
      

  return (
    <div className='flex flex-col h-screen py-6'>
      {yik ? (
        <div className='px-5 flex-grow flex flex-col justify-between'>
          <div className='flex gap-4 items-center'>
            <Link href={'/'}><TiArrowBack size={30} /></Link>
            <h1 className='text-3xl font-bold'>{yik.name}</h1>
            <Image
              src={yik.image}
              alt="My Image"
              width={30} // Set the desired width
              height={30} // Set the desired height
            />
            <p>{yik.num}</p>
          </div>

          <div className='flex justify-start gap-5'>
            <div>
              <h1>错卦</h1>
              <p>{reverse}</p>
              <Link href={`./${reverseYik?.id}`}>
                {reverseYik?.name}
              </Link>
              <Link href={`./${reverseYik?.id}`}>
                <Image
                  src={reverseYik?.image ?? '/default-image.jpg'} // Provide a default image path
                  alt="My Image"
                  width={30} // Set the desired width
                  height={30} // Set the desired height
                />
              </Link>
            </div>

            <div>
              <h1>综卦</h1>
              <p>{opposite}</p>
              <Link href={`./${oppositeYik?.id}`}>
                {oppositeYik?.name}
              </Link>
              <Link href={`./${oppositeYik?.id}`}>
                <Image
                  src={oppositeYik?.image ?? '/default-image.jpg'} // Provide a default image path
                  alt="My Image"
                  width={30} // Set the desired width
                  height={30} // Set the desired height
                />
              </Link>
            </div>

            <div>
              <h1>互卦</h1>
              <p>{finalResult}</p>
              <Link href={`./${interYik?.id}`}>
                {interYik?.name}
              </Link>
              <Link href={`./${interYik?.id}`}>
                <Image
                  src={interYik?.image ?? '/default-image.jpg'} // Provide a default image path
                  alt="My Image"
                  width={30} // Set the desired width
                  height={30} // Set the desired height
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>Invalid Yik ID: </div>
      )}
    </div>
  );
}
