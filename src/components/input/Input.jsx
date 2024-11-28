import React from "react";

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  errors,
  placeholder,
  autoComplete = "off",
}) => {
  //   console.log(errors);

  return (
    <div className="w-full relative flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`
          block text-sm font-medium
          ${errors[id] ? "text-red-600" : ""}
        `}
      >
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        {...register(id)}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        inputMode={type === "number" ? "numeric" : "text"}
        className={`
          w-full
          py-3
          px-4
          border
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:border-neutral-400
          ${
            errors[id]
              ? "border-red-600 focus:border-red-600"
              : "border-neutral-300 focus:border-green-accent"
          }
        `}
      />
      {errors && <p className="text-red-500 text-sm">{errors[id]?.message}</p>}
    </div>
  );
};

export default Input;
