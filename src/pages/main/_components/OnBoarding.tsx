import useScrollLock from "@/hooks/useScrollLock";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import onboarding1 from "../_assets/onboarding/onboarding_1.webp";
import onboarding2 from "../_assets/onboarding/onboarding_2.webp";
import onboarding3 from "../_assets/onboarding/onboarding_3.webp";
import onboarding4 from "../_assets/onboarding/onboarding_4.webp";
import onboarding5 from "../_assets/onboarding/onboarding_5.webp";

const ONBOARDING_IMAGES = [
  onboarding1,
  onboarding2,
  onboarding3,
  onboarding4,
  onboarding5,
];

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
      zIndex: 100,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function OnBoarding() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState(0);

  const nextPage = useCallback(() => {
    setPage((prev) => (prev < 4 ? prev + 1 : prev));
    setDirection(1);
  }, []);

  const prevPage = useCallback(() => {
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
    setDirection(-1);
  }, []);

  useScrollLock(isOpen);
  useEffect(() => {
    if (!localStorage.getItem("onboarding")) {
      setIsOpen(true);
      // localStorage.setItem('onboarding', 'true');
    }
  }, []);

  return (
    isOpen && (
      <>
        <div className="fixed left-1/2 z-[999] h-full w-full max-w-[495px] -translate-x-1/2 bg-dim-85" />
        <div className="fixed left-1/2 z-[999] flex h-full w-full -translate-x-1/2 flex-col items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="absolute h-[479px] w-[311px] flex-none overflow-hidden"
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  nextPage();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevPage();
                }
              }}
            >
              <img
                className="w-[311px]"
                src={ONBOARDING_IMAGES[page]}
                alt="onboarding1"
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
              <button
                type="button"
                className="absolute right-16 top-16 w-24 h-24"
                aria-label="123"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-[calc(50%_-_240px)] z-[1000] flex h-20 w-full items-center justify-center gap-8">
            {[0, 1, 2, 3, 4].map((index) => (
              <>
                {index === page ? (
                  <svg
                    key={index}
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="7" r="7" fill="#FFC42E" />
                  </svg>
                ) : (
                  <svg
                    key={index}
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4.5" cy="4" r="4" fill="white" />
                  </svg>
                )}
              </>
            ))}
          </div>
        </div>
      </>
    )
  );
}

export default OnBoarding;
