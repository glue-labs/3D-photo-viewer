import "./style.css";

interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { title, disabled, onClick } = props;

  return (
    <button onClick={onClick} className="button" disabled={disabled}>
      {title}
    </button>
  );
};

export default CustomButton;
