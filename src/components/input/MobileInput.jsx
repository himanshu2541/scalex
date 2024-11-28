import React from "react";
import "react-international-phone/style.css"; // Import the styling for react-international-phone
import { PhoneInput } from "react-international-phone";
import "./mobile_input.css";

const MobileInput = ({ value, onChange, errors, id }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Phone Number</label>
      <PhoneInput
        defaultCountry="in"
        value={value}
        onChange={onChange}
        placeholder="Enter phone number"
      />
      {errors && <p className="text-red-500 text-sm">{errors[id]?.message}</p>}
    </div>
  );
};

export default MobileInput;
