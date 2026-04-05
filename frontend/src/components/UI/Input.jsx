export default function Input({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  autoComplete,
  className = "",
  ...props
}) {
  const inputId = id || name;

  return (
    <div className={`control ${className}`}>
      {label && <label htmlFor={inputId}>{label}</label>}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
      />
    </div>
  );
}
