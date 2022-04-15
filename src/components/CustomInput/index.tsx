interface CustomInputProps {
  value: string | number;
  handleOnChange: (val: any) => void;
  className?: string;
  placeholder?: string;
  type?: string;
}

const CustomInput = (props: CustomInputProps) => {
  const { type, value, className, placeholder, handleOnChange } = props;
  return (
    <input
      type={type}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={(e: any) => handleOnChange(e.target.value)}
    />
  );
};

export default CustomInput;
