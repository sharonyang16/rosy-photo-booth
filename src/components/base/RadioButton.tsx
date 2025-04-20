import Typography from "./Typography";

type RadioButtonProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({ label, value, checked, onChange }: RadioButtonProps) => {
  return (
    <label className="flex items-center gap-2">
      <input type="radio" className="accent-pink-primary" value={value} checked={checked} onChange={onChange} />
      <Typography>{label}</Typography>
    </label>
  );
};

export default RadioButton;
