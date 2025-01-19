import { motion, wrap } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface OnBoardingItemProps {
  bottom: ReactNode;
  direction: number;
  page: number;
  paginate: (newDirection: number) => void;
}

function OnBoardingItem({ bottom, page, direction, paginate }: OnBoardingItemProps) {
  const tabIndex = wrap(0, 5, page);

  return (
    <motion.div
      className="relative h-full w-full"
      // src={images[imageIndex]}
      tabIndex={tabIndex}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      <div className="flex h-full w-full items-center justify-center bg-main-600">
        <div className="h-[352px] w-[200px] rounded-[12px] border-[9px] border-gray-800 bg-white" />
      </div>

      <button type="button" className="absolute right-16 top-16" aria-label="123">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.5 4.5L4.5 19.5M4.5 4.5L19.5 19.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 flex h-[129px] w-full items-center justify-center bg-white">
        <p className="text-center title-20-bold">{bottom}</p>
      </div>
    </motion.div>
  );
}

export default OnBoardingItem;
