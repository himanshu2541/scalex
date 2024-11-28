import React from "react";
import Select from "react-select";

const SelectInput = ({
  value,
  onChange,
  options,
  placeholder = "placeholder",
  isClearable = true,
  id,
  errors,
}) => {
  return (
    <div>
      <Select
        placeholder={placeholder}
        isClearable={isClearable}
        options={options}
        value={value}
        id={id}
        onChange={(value) => onChange(value)}
        classNames={{
          control: () => "p-1.5 border outline-none",
          input: () => "text-sm",
          option: () => "text-sm py-1",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,

          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "rgba(var(--green-accent), 0.5)",
          },
        })}
      />
      {errors && <p className="text-red-500 text-sm">{errors[id]?.message}</p>}
    </div>
  );
};

export default SelectInput;
