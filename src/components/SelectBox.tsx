import styled from "styled-components";

type Option = {
  value: string;
  label: string;
};

type SelectBoxProps = {
  options: Option[];
  onChange: (value: string) => void;
  value: string;
};

export function SelectBox({ options, onChange, value }: SelectBoxProps) {
  return (
    <SelectStyle value={value} onChange={(e: any) => onChange(e.target.value)}>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </SelectStyle>
  );
}

const SelectStyle = styled.select`
  flex: 1 1 calc(50% - 5px);
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  appearance: none;
`;
