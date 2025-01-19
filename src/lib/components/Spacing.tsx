import { css } from "@emotion/react";

interface SpacingProps {
  size: number;
}

const Spacing = ({ size }: SpacingProps) => {
  return <div css={css({ height: `${size}px`, flex: "none" })} />;
};

export default Spacing;
