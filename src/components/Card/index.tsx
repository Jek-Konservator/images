import React, { FC } from "react";
import {
  CardContainer,
  CardImage,
  CardImageContainer,
  CardInfo,
  CardInfoDate,
} from "./style";
import { dateConvertToUser } from "utils/dateConvertToUser/dateConvertToUser";
import { LikeButton } from "./LikeButton";
import { TCard } from "./type";

export const Card: FC<TCard> = ({ onClick, isLiked, image }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={image.urls.regular} />
      </CardImageContainer>
      <CardInfo>
        <CardInfoDate>
          Дата добавления: <br /> {dateConvertToUser(image.created_at)} года
        </CardInfoDate>
        <LikeButton isLiked={isLiked} onClick={onClick} />
      </CardInfo>
    </CardContainer>
  );
};
