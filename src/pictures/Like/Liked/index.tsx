import React, { FC } from "react";
import { ImageLiked } from "./style";
import { TLiked } from "./type";

export const LikedPicture: FC<TLiked> = (props) => {
  return <ImageLiked {...props} />;
};
