import React, {FC} from "react";
import { ImageLike } from "./style";
import {TLike} from "./type";

export const LikePicture:FC<TLike> = (props) => {
  return <ImageLike {...props} />;
};
