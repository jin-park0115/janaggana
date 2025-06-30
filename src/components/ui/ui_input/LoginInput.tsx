import React from "react";
import styled from "styled-components";

type InputProps = {
  type: string;
  id: string;
  placeholder: string;
  onEmailPW: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const LogintInput = ({
  type,
  placeholder,
  id,
  onEmailPW,
}: InputProps) => {
  return (
    <>
      <LabelStyle>{id}</LabelStyle>
      <InputStyle type={type} placeholder={placeholder} onChange={onEmailPW} />
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
  font-size: 0.9rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #8dabfb;
    opacity: 0.8;
  }
`;
