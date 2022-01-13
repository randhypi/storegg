export interface InputProps {
  label: string;
  input: string;
}

export default function Input(props: InputProps) {
  const { label, input, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor={input}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id={input}
        name={input}
        aria-describedby={input}
        placeholder={`Enter your ${input}`}
        {...nativeProps}
      />
    </>
  );
}
