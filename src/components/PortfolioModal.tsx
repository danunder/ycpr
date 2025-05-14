import Image from 'next/image';
import {FC, memo, useCallback, useEffect, useMemo, useRef} from 'react';

import {PortfolioItem} from '../data/dataDef';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal: FC<PortfolioModalProps> = memo(({item, isOpen, onClose}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === modalRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  const imageStyle = useMemo(() => ({objectFit: 'contain' as const}), []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store the original body overflow style
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Add padding right to compensate for scrollbar disappearance
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      // Prevent scrolling on the main body
      document.body.style.overflow = 'hidden';

      // Cleanup function to restore original styles
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
    return
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdropClick}
      ref={modalRef}>
      <div className="window max-w-screen-lg w-11/12 max-h-[85vh]">
        <div className="title-bar">
          <div className="title-bar-text p-1 lg:p-2 text-base sm:text-xl">
            <label className="text-xl font-bold">{item.title}</label>
          </div>
          <div className="title-bar-controls p-2">
            <button className="h-7 w-7 text-center font-bold p-1 text-xl" onClick={onClose}>
              x
            </button>
          </div>
        </div>
        {/* Make only the window-body scrollable */}
        <div className="window-body" >
          <ul className="tree-view overflow-auto gap-4" data-scrollable>
            <div className="flex flex-col sm:flex-none sm:grid sm:grid-cols-3">
              <div className="field-row-stacked p-2">
                <p className="mb-2 text-2xl">
                  {item.clientOrBrand} • {item.timePeriod}
                </p>
                <p className="mb-4 text-xl">{item.description}</p>
                {item.whatIDid}
              </div>
              <div className="col-span-2">
                <div className="items-center justify-center flex flex-col gap-4">
                  {item.images.map((image, index) => (
                    <div className="relative max-w-[300px]" key={index}>
                      <Image
                        alt={`${image.src}`}
                        height={image.imageHeight}
                        src={image.src}
                        style={imageStyle}
                        width={image.imageWidth}
                      />
                    </div>
                  ))}
                  {item.videoEmbeds.map(video => video)}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
});

PortfolioModal.displayName = 'PortfolioModal';
export default PortfolioModal;
