import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-base sm:text-xl font-bold">{title}</h2>
        <div className="flex-1 text-sm font-medium italic sm:flex-none">{location}</div>
        <div className="flex-1 text-sm sm:flex-none">{date}</div>
      </div>
      {content && content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
