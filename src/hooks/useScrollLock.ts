import { useEffect } from 'react';

const useScrollLock = (open: boolean) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);
};

export default useScrollLock;
