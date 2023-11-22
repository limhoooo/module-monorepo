import styled from 'styled-components';
type PropsWrapper = {
  $width: string;
  $height: string;
};
export const Wrapper = styled.div<PropsWrapper>`
  width: ${({ $width }) => ($width ? `${$width}` : '250px')};
  height: ${({ $height }) => ($height ? `${$height}` : '220px')};
  margin-right: 20px;
`;
export const ProductCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
`;

export const ButtonBox = styled.div`
  position: absolute;
  bottom: 40px;
`;

export const ProductInfoBox = styled.div`
  padding-top: 10px;
`;
