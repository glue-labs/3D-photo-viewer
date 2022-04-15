interface CustomInputProps {
  value: string | number;
  handleOnChange: (val: any) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  accept?: string;
}

const CustomInput = (props: CustomInputProps) => {
  const { type, value, accept, className, placeholder, handleOnChange } = props;
  return (
    <input
      type={type}
      value={value}
      accept={accept}
      className={className}
      placeholder={placeholder}
      onChange={(e: any) => handleOnChange(e.target.value)}
    />
  );
};

export default CustomInput;
