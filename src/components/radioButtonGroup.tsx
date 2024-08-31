
import React from 'react';
import RadioButton from './radioButton';


interface Option {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  name: string;
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          name={name}
          checked={selectedValue === option.value}
          onChange={onChange}
          variant="default"
          rounded="full"
          color="default"
          size="large"
          disabled={false}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
