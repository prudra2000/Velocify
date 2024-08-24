import React from "react";

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

const Option: React.FC<OptionProps> = ({ children, ...props }) => (
  <option {...props} className="text-black bg-black">{children}</option>
);

export { Option };