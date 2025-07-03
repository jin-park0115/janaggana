import { Link } from "react-router-dom";
import styled from "styled-components";

export const SocialButton = styled(Link)<{
  $bgColor?: string;
  $color?: string;
  $boxShadowRGB?: string;
}>`
  font-size: 1rem;
  font-weight: 600;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px 12px;
  gap: 8px;
  background-color: ${({ $bgColor }) => $bgColor || "#333"};
  box-shadow: ${({ $boxShadowRGB }) =>
    `0 15px 30px rgba(${$boxShadowRGB || "59, 164, 250"}, 0.36)`};
  color: ${({ $color }) => $color || "#fff"};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transition: 0.3s linear;
    box-shadow: 0 0 0 rgba(233, 30, 99, 0);
  }

  @media (max-width: 900px) {
    font-size: 0.9rem;
    gap: 12px;
  }
`;
