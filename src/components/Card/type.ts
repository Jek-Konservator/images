interface ICard {
  image: any;
  isLiked: boolean;
  onClick: () => void;
}

export type TCard = ICard;
