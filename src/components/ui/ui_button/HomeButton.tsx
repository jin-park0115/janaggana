import { Link } from "react-router-dom";
import styled from "styled-components";

type ButtonProps = {
  bgColor: string;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export function HomeButton({ children, bgColor, icon, href }: ButtonProps) {
  const content = (
    <>
      {icon && <div>{icon}</div>}
      {children}
    </>
  );

  return href ? (
    <StyledLink to={href} $backGroundColor={bgColor}>
      {content}
    </StyledLink>
  ) : (
    <ButtonStyle $backGroundColor={bgColor}>{content}</ButtonStyle>
  );
}

const baseStyle = `
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const ButtonStyle = styled.button<{ $backGroundColor: string }>`
  ${baseStyle}
  transition: filter 0.3s ease;

  background-color: ${(props) => props.$backGroundColor};

  &:hover {
    filter: brightness(90%);
  }
`;

const StyledLink = styled(Link)<{ $backGroundColor: string }>`
  ${baseStyle}
  transition: filter 0.3s ease;

  background-color: ${(props) => props.$backGroundColor};
  &:hover {
    filter: brightness(90%);
  }
`;
