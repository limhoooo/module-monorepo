import styled from 'styled-components';

export const Wrapper = styled.div``;
export const TitleBox = styled.div`
  margin-top: 20px;
`;
export const TabBox = styled.div`
  width: 340px;
  margin: 0 auto;
  > div {
    display: inline-block;
    margin-top: 20px;
  }
  > div:nth-child(2n) {
    margin-right: 0;
  }
`;
