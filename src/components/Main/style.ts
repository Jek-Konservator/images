import styled from "@emotion/styled";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-gap: 12px;
  @media ( max-width: 1080px) {
    grid-template-columns: repeat(2, 320px);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 320px);
  }
`;
