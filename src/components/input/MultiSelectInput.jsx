import React from "react";

const MultiSelectInput = ({
  options,
  selectedOptions,
  onChange,
  label,
  errors,
}) => {
  const handleCheckboxChange = (optionValue) => {
    if (selectedOptions.includes(optionValue)) {
      // Remove option if it's already selected
      onChange(selectedOptions.filter((item) => item !== optionValue));
    } else {
      // Add option if it's not selected
      onChange([...selectedOptions, optionValue]);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="accent-green-accent"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {errors && <p className="text-red-500 text-sm">*{errors.message}</p>}
    </div>
  );
};

export default MultiSelectInput;
