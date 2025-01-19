import { ComponentPropsWithRef, forwardRef } from "react";
import replace from "./_assets/replace.webp";

const RestaurantImage = forwardRef<
  HTMLImageElement,
  ComponentPropsWithRef<"img">
>((props, ref) => {
  return <img {...props} ref={ref} src={props.src ?? replace} />;
});

export default RestaurantImage;
