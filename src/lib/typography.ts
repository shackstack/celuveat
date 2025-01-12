import { css, SerializedStyles } from "@emotion/react";

type Typography =
  | "title-22-md"
  | "title-20-bold"
  | "title-20-md"
  | "title-18-bold"
  | "body-18-bold"
  | "title-16-sb"
  | "body-16-md"
  | "title-15-md"
  | "body-15-rg"
  | "body-14-md"
  | "body-14-rg"
  | "body-13-semibold"
  | "body-13-rg"
  | "caption-12-md"
  | "caption-12-rg"
  | "caption-11-md";

export const typography: Record<Typography, SerializedStyles> = {
  "title-22-md": css({
    fontSize: "22px",
    lineHeight: "28px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
  }),
  "title-20-bold": css({
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
  }),
  "title-20-md": css({
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
  }),
  "title-18-bold": css({
    fontSize: "18px",
    lineHeight: "21.6px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
  }),
  "body-18-bold": css({
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
  }),
  "title-16-sb": css({
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 600,
    letterSpacing: "-0.3px",
  }),
  "body-16-md": css({
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
  }),
  "title-15-md": css({
    fontSize: "15px",
    lineHeight: "18px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
  }),
  "body-15-rg": css({
    fontSize: "15px",
    lineHeight: "18px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
  }),
  "body-14-md": css({
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: 500,
    letterSpacing: "0",
  }),
  "body-14-rg": css({
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
  }),
  "body-13-semibold": css({
    fontSize: "13px",
    lineHeight: "16px",
    fontWeight: 600,
    letterSpacing: "-0.3px",
  }),
  "body-13-rg": css({
    fontSize: "13px",
    lineHeight: "19px",
    fontWeight: 400,
    letterSpacing: "-0.3px",
  }),
  "caption-12-md": css({
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 500,
    letterSpacing: "0",
  }),
  "caption-12-rg": css({
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 400,
    letterSpacing: "0",
  }),
  "caption-11-md": css({
    fontSize: "11px",
    lineHeight: "13px",
    fontWeight: 500,
    letterSpacing: "-0.3px",
  }),
};
