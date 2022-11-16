import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 5px;
    &:hover {
      text-decoration: underline;
      }
  }
`;