import React from "react";

interface ILikeButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLiked?: boolean;
  onCLick?: () => void;
}

export type TLikeButton = ILikeButton;
