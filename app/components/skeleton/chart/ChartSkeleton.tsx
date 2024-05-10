import { memo } from 'react';
import Skeleton from 'react-loading-skeleton';

const ChartSkeleton = () => {
  return <Skeleton baseColor='#202020' highlightColor='#444' height={465} />;
};

export default memo(ChartSkeleton);
