import styled from "styled-components";

type ButtonProps = {
  color: string;
  bgColor: string;
  children: React.ReactNode;
};

export function Button({ children, color, bgColor }: ButtonProps) {
  return (
    <ButtonStyle $color={color} $backGroundColor={bgColor}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<{ $color: string; $backGroundColor: string }>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$backGroundColor};
`;
