import { useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
  eventHandler: () => void;
  observerOptions?: IntersectionObserverInit;
}

const useInfiniteScroll = ({
  eventHandler,
  observerOptions,
}: UseInfiniteScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        eventHandler();
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, eventHandler]);

  return ref;
};

export default useInfiniteScroll;
