import React from "react";

const MessageInput = ({
  id,
  label,
  required,
  register,
  errors,
  placeholder = "placeholder",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="message" className="block text-sm font-medium">
        {label}
      </label>
      <textarea
        id={id}
        {...register(id, required)}
        placeholder={placeholder}
        className={`border rounded-md outline-none px-4 py-3 w-full ${
          errors[id]
            ? "border-red-600 focus:border-red-600"
            : "border-neutral-300 focus:border-green-accent"
        }`}
        rows="10"
      ></textarea>
    </div>
  );
};

export default MessageInput;
