import {FC, memo, useState} from 'react';

import {education, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [activeTab, setActiveTab] = useState<'Education' | 'Work' | 'Skills'>('Work');

  return (
    <Section
      className="bg-background p-0 bg-gradient-to-br from-green via-10% via-gradient1 via-30% via-gradient2 via-50% via-gradient3 via-70% via-gradient4 to-90% to-gradient5"
      sectionId={SectionId.Resume}>
      <div className="relative flex h-screen items-stretch justify-center">
        <div className="window z-10 h-4/5 overflow-scroll w-[95%] max-w-screen-md sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Resume</div>
          </div>
          <div className="window-body h-[85%]">
            {/* Tab Navigation */}
            <menu aria-label="Resume Sections" className="tabs" role="tablist">
              {['Education', 'Work', 'Skills'].map(tab => (
                <li
                  aria-controls={`${tab.toLowerCase()}-panel`}
                  aria-selected={activeTab === tab}
                  className={`p-2 text-lg sm:text-2xl first-line:tab ${activeTab === tab ? 'active' : ''}`}
                  id={`${tab.toLowerCase()}-tab`}
                  key={tab}
                  onClick={() => setActiveTab(tab as 'Education' | 'Work' | 'Skills')}
                  role="tab">
                  {tab}
                </li>
              ))}
            </menu>
            {/* Tab Content */}
            <div
              aria-labelledby={`${activeTab.toLowerCase()}-tab`}
              className="window h-full"
              data-scrollable
              role="tabpanel">
              {activeTab === 'Education' && (
                <div
                  aria-labelledby="education-tab"
                  className="window-body h-[85%] overflow-scroll"
                  id="education-panel"
                  role="tabpanel">
                  <ResumeSection title="Education">
                    {education.map((item, index) => (
                      <TimelineItem item={item} key={`${item.title}-${index}`} />
                    ))}
                  </ResumeSection>
                </div>
              )}
              {activeTab === 'Work' && (
                <div
                  aria-labelledby="work-tab"
                  className="window-body h-[85%] overflow-scroll"
                  id="work-panel"
                  role="tabpanel">
                  <ResumeSection title="Work"></ResumeSection>
                </div>
              )}
              {activeTab === 'Skills' && (
                <div
                  aria-labelledby="skills-tab"
                  className="window-body h-[95%] overflow-scroll"
                  id="skills-panel"
                  role="tabpanel">
                  <ResumeSection title="Skills">
                    {skills.map((skillgroup, index) => (
                      <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
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
