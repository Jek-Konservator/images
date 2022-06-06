import styled from "@emotion/styled";

export const CardContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 8px 1px gray;
  margin: 12px 8px;
  overflow: hidden;
`;
export const CardImageContainer = styled.div`
  width: 100%;
  height: 180px;
  border-bottom: 1px solid gray;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;
export const CardInfo = styled.div`
  width: 100%;
  height: 180px;
  padding: 16px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 200%;
  color: #212121;
`;

export const CardInfoDate = styled.div`
  font-size: 24px;
  user-select: none;
  margin-left: 12px;
`;
