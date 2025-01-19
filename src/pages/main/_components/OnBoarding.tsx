import useScrollLock from "@/hooks/useScrollLock";
import Image from "@/lib/components/Image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

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
              <Image
                src={`/onboarding/onboarding_${page + 1}.webp`}
                alt="onboarding1"
                width={311}
                height={479}
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
              <button
                type="button"
                className="absolute right-16 top-16"
                aria-label="123"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 4.5L4.5 19.5M4.5 4.5L19.5 19.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
