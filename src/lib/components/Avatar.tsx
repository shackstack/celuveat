import { css } from "@emotion/react";

interface AvatarProps {
  imageUrl: string;
  alt: string;
  size: number;
}

function Avatar({ imageUrl, size, alt }: AvatarProps) {
  return (
    <img
      src={imageUrl}
      alt={alt}
      css={css({
        width: size,
        height: size,

        aspectRatio: "1 / 1",
        flex: "none",
        overflow: "hidden",
        borderRadius: "50%",
        objectFit: "cover",
      })}
    />
  );
}

export default Avatar;
