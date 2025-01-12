import { css, keyframes } from "@emotion/react";
import { PropsWithChildren, useEffect } from "react";
import { colors } from "../colors";
import { typography } from "../typography";

interface ToastProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

const toast = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

function Toast({ open, onClose, children }: ToastProps) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return open ? (
    <div
      css={css(
        {
          position: "fixed",
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",

          animation: `${toast} 0.2s ease-in-out`,
          textWrap: "nowrap",
          borderRadius: "8px",
          backgroundColor: colors.dim[85],
          padding: "16px 32px",
          color: colors.white.DEFAULT,
        },
        typography["body-14-rg"]
      )}
    >
      {children}
    </div>
  ) : null;
}

export default Toast;
