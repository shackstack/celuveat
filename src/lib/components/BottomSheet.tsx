import { css } from "@emotion/react";
import { PropsWithChildren, useEffect } from "react";
import { colors } from "../colors";
import { typography } from "../typography";

export interface BottomSheetProps {
  title?: string;
  open: boolean;
  onClose: () => void;
}

const BottomSheet = ({
  title,
  open,
  onClose,
  children,
}: PropsWithChildren<BottomSheetProps>) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    open && (
      <>
        <div
          css={css({
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 101,
            height: "100%",
            width: "100%",
            animation: "fade-in 0.3s ease-in-out",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          })}
          onClick={onClose}
        />
        <div
          css={css({
            position: "fixed",
            bottom: 0,
            right: "50%",
            zIndex: 102,
            width: "100%",
            maxWidth: "495px",
            transform: "translateX(50%)",
            animation: "slide-up 0.3s ease-in-out",
            borderRadius: "16px 16px 0 0",
            backgroundColor: "white",
            padding: "20px 20px 34px",
          })}
        >
          <div
            css={css({
              display: "flex",
              height: "20px",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            })}
          >
            <hr
              css={css({
                height: "4px",
                width: "48px",
                borderRadius: "8px",
                backgroundColor: colors.gray[200],
              })}
            />
          </div>
          <div
            css={css({
              marginTop: "16px",
            })}
          >
            {title && (
              <h2
                css={css(typography["title-16-sb"], {
                  marginBottom: "24px",
                  textAlign: "center",
                })}
              >
                {title}
              </h2>
            )}
            {children}
          </div>
        </div>
      </>
    )
  );
};

export default BottomSheet;
