import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const style = useMemo<React.CSSProperties>(() => ({objectFit: 'contain'}), []);
  return (
    <Section className="bg-clouds" data-scrollable noPadding sectionId={SectionId.Portfolio}>
      <div className="relative flex min-h-screen items-center justify-center p-8 lg:px-0">
        <div className="window z-10 min-h-[50vh] max-h-[80vh] mb-[3rem] sm:min-w-[600px] sm:max-w-screen-lg sm:px-0">
          <div className="title-bar">
            <div className="title-bar-text p-1 lg:p-2 text-base sm:text-2xl">Portfolio</div>
          </div>
          <div className="window-body p-4">
            <div className="flex flex-col gap-y-4">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto h-[calc(100%-60px)]"
                data-scrollable>
                {portfolioItems.map((item, index) => {
                  const {title, heroImage} = item;
                  return (
                    <div className="pb-2" key={`${title}-${index}`}>
                      <div className="field-row-stacked mb-2">
                        <label className="font-bold">{title}</label>
                        <div className="relative h-40 w-full overflow-hidden">
                          {heroImage && (
                            <div className="absolute inset-0">
                              <Image
                                alt={title}
                                blurDataURL={typeof heroImage.src === 'string' ? heroImage.src : heroImage.src.src}
                                className="w-full h-full"
                                height={heroImage.imageHeight}
                                placeholder="blur"
                                src={heroImage.src}
                                style={style}
                                width={heroImage.imageWidth}
                              />
                            </div>
                          )}
                          <ItemOverlay item={item} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      onClick={handleItemClick}
      ref={linkRef}>
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white text-2xl opacity-100">{item.title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">
            {item.clientOrBrand} • {item.timePeriod}
          </p>
          <p className="text-xs text-white opacity-100 sm:text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
});

ItemOverlay.displayName = 'ItemOverlay';
