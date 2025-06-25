import styled from "styled-components";

export const LoginButton = styled.button<{ $bgColor?: string }>`
  font-size: 1rem;
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: ${({ $bgColor }) => $bgColor || "#333"};
  box-shadow: 0 15px 30px rgba(79, 115, 217, 0.36);
  color: #fff;
  cursor: pointer;
  &:hover {
    transition: 0.3s linear;
    box-shadow: 0 0 0 rgba(233, 30, 99, 0);
  }
`;
