import styled from "styled-components";

type InputProps = {
  type: string;
  id: string;
  placeholder: string;
};

export const LogintInput = ({ type, placeholder, id }: InputProps) => {
  return (
    <>
      <LabelStyle>{id}</LabelStyle>
      <InputStyle type={type} placeholder={placeholder} />
    </>
  );
};

const LabelStyle = styled.label`
  color: #8dabfb;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const InputStyle = styled.input`
  margin: 5px 0 10px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #8dabfb;
  background: none;
  padding: 4px 12px;
  opacity: 0.8;
  font-size: 12px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #8dabfb;
    opacity: 0.8;
  }
`;
