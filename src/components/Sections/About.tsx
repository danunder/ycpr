import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {backgroundImageSrc, profileImageSrc, description} = aboutData;
  const resolveSrc = useMemo(() => {
    if (!backgroundImageSrc) return undefined;
    return typeof backgroundImageSrc === 'string' ? backgroundImageSrc : backgroundImageSrc.src;
  }, [backgroundImageSrc]);
  return (
    <Section noPadding sectionId={SectionId.About}>
      <div
        className="bg-cover bg-center"
        style={backgroundImageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
        <div className="relative flex min-h-screen sm:max-h-screen  items-center justify-center p-8 lg:px-0">
          <div className="window z-10 sm:max-w-screen-md  sm:px-0">
            <div className="title-bar bg-gray-800/60">
              <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">About me</div>
            </div>
            <div className="flex flex-col md:flex-row p-2 gap-y-2 ">
              <div className="position-relative max-w-[50vw]">
                <Image
                  alt="about-me-image"
                  className="rounded-xl"
                  height={2048}
                  src={profileImageSrc || '/default-profile.png'}
                  width={1536}
                />
              </div>
              <div className="p-2 gap-y-2">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
