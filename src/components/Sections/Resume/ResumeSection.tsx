import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({children}) => {
  return (
    <div className="window gap-y-4 px-4">
      <ul className="tree-view col-span-1 flex flex-col md:col-span-3">{children}</ul>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
