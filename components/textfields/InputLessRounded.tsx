import Input, { InputProps } from "./Input";

const InputLessRounded = ({ className, ...inputProps }: InputProps) => {
  return <Input {...inputProps} className={`${className ?? ""} rounded-lg`} />;
};

export default InputLessRounded;
