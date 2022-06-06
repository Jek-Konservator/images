import React, { FC } from "react";

import { ButtonStyled } from "./style";
import { TButton } from "./type";

export const Button: FC<TButton> = (props) => {
  return <ButtonStyled {...props} />;
};
