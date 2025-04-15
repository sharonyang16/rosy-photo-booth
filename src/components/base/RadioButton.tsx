type RadioButtonProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const RadioButton = ({ label, value, checked, onChange }: RadioButtonProps) => {
  return (
    <label>
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default RadioButton;
