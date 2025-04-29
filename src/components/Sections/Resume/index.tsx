import Image from 'next/image';
import React, {FC, memo, useMemo, useState} from 'react';

import {resumeData, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [activeTab, setActiveTab] = useState<'Work' | 'Skills' | 'Clients' | 'Education'>('Work');
  const {education, experience, skills, clients, timelineImageSrc} = resumeData;

  const resolveSrc = useMemo(() => {
    if (!timelineImageSrc) return undefined;
    return typeof timelineImageSrc === 'string' ? timelineImageSrc : timelineImageSrc.src;
  }, [timelineImageSrc]);
  return (
    <Section
      className="bg-background p-0 bg-gradient-to-br from-green via-10% via-gradient1 via-30% via-gradient2 via-50% via-gradient3 via-70% via-gradient4 to-90% to-gradient5 md:py-8"
      sectionId={SectionId.Resume}>
      <div className="relative flex min-h-screen sm:max-h-screen justify-center">
        <div className="window z-10 overflow-scroll w-[95%] max-w-screen-md h-full align-top sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Resume</div>
          </div>
          <div className="window-body h-full">
            {/* Tab Navigation */}
            <menu aria-label="Resume Sections" className="tabs" role="tablist">
              {['Work', 'Skills', 'Clients', 'Education'].map(tab => (
                <li
                  aria-controls={`${tab.toLowerCase()}-panel`}
                  aria-selected={activeTab === tab}
                  className={`first-line:tab ${activeTab === tab ? 'active' : ''}`}
                  id={`${tab.toLowerCase()}-tab`}
                  key={tab}
                  onClick={() => setActiveTab(tab as 'Work' | 'Skills' | 'Clients' | 'Education')}
                  role="tab">
                  <h2 className="p-2 px-4 text-lg sm:text-3xl">{tab}</h2>
                </li>
              ))}
            </menu>
            {/* Tab Content */}
            <div
              aria-labelledby={`${activeTab.toLowerCase()}-tab`}
              className="window h-full"
              data-scrollable
              role="tabpanel">
              {activeTab === 'Work' && (
                <div
                  aria-labelledby="work-tab"
                  className="window-body h-full overflow-scroll"
                  id="work-panel"
                  role="tabpanel">
                  <ResumeSection title="Work">
                    <div className="flex flex-row p-6 gap-y-2 justify-center items-stretch">
                      <div className="hidden sm:flex flex-col items-center space-y-20">
                        {experience.map(
                          (item, index) =>
                            index % 2 === 0 && <TimelineItem item={item} key={`${item.title}-${index}`} />,
                        )}
                      </div>
                      <Image
                        alt="work-image"
                        className="relative object-cover"
                        height={400}
                        src={resolveSrc || '/default-image-path.jpg'}
                        width={56}
                      />
                      <div className="flex flex-col sm:hidden gap-y-4">
                        {experience.map((item, index) => (
                          <TimelineItem item={item} key={`${item.title}-${index}`} />
                        ))}
                      </div>
                      <div className="hidden sm:flex flex-col items-center mt-20 space-y-20">
                        {experience.map(
                          (item, index) =>
                            index % 2 === 1 && <TimelineItem item={item} key={`${item.title}-${index}`} />,
                        )}
                      </div>
                    </div>
                  </ResumeSection>
                </div>
              )}
              {activeTab === 'Skills' && (
                <div
                  aria-labelledby="skills-tab"
                  className="window-body h-[100%] overflow-scroll"
                  id="skills-panel"
                  role="tabpanel">
                  <ResumeSection title="Skills">
                    {skills.map((skillgroup, index) => (
                      <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
                    ))}
                  </ResumeSection>
                </div>
              )}
              {activeTab === 'Clients' && (
                <div aria-labelledby="clients-tab" className="window-body h-[600px]" id="clients-panel" role="tabpanel">
                  <ResumeSection title="Clients">
                    <div className="flex flex-row flex-wrap gap-x-6 gap-y-6 p-6">
                      {clients.map(({title, image}) => (
                        <Image alt={title} className="rounded-sm" height={140} src={image} width={140} />
                      ))}
                    </div>
                  </ResumeSection>
                </div>
              )}
              {activeTab === 'Education' && (
                <div
                  aria-labelledby="education-tab"
                  className="window-body overflow-scroll"
                  id="education-panel"
                  role="tabpanel">
                  <ResumeSection title="Education">
                    {education.map((item, index) => (
                      <TimelineItem item={item} key={`${item.title}-${index}`} />
                    ))}
                  </ResumeSection>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
