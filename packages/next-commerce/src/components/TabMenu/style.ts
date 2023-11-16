import styled from 'styled-components';

type PropsTabMenuBox = {
  $active: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const TabMenuBox = styled.div<PropsTabMenuBox>`
  font-weight: ${({ $active }) => ($active ? `bold` : '')};
  border-bottom: ${({ $active }) => ($active ? `1px solid #999` : '')};
  color: ${({ $active }) => ($active ? `#333` : '#605f5f')};
`;
