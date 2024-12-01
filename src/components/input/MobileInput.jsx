import React, { useState } from "react";
import "react-international-phone/style.css"; // Import the styling for react-international-phone
import { PhoneInput } from "react-international-phone";
import "./mobile_input.css";

const MobileInput = ({ value, onChange, errors, id }) => {
  const [hasTouched, setHasTouched] = useState(false);
  const handleFocus = () => {
    setHasTouched(true); // Mark as touched when user focuses on the input
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Phone Number</label>
      <PhoneInput
        defaultCountry="in"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        placeholder="Enter phone number"
      />
      {hasTouched && errors[id] && (
        <p className="text-red-500 text-sm">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default MobileInput;
