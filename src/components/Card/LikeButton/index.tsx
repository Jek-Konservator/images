import React, { FC} from "react";
import { LikedPicture } from "../../../pictures/Like/Liked";
import { LikePicture } from "../../../pictures/Like/Like";
import { LikeButtonStyled } from "./style";
import { TLikeButton } from "./type";

export const LikeButton: FC<TLikeButton> = ({ onClick, isLiked }) => {


  return (
    <LikeButtonStyled onClick={onClick}>
      {isLiked ? <LikedPicture /> : <LikePicture />}
    </LikeButtonStyled>
  );
};
