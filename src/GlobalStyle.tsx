import { Global, css } from "@emotion/react";

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: 'Roboto', sans-serif;
        },
        button{
         font-family: 'Roboto', sans-serif;
        }
      `}
    />
  );
};
