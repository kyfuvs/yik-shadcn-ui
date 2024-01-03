// YikList.tsx
import React from 'react';
import { YikData } from './SharedInterfaces';

interface YikListProps {
  data: YikData;
}

const YikList: React.FC<YikListProps> = ({ data }) => {
  const { name } = data;
  return (
    <div>
      {name}
    </div>
  );
};

export default YikList;
