import React, { useContext, useState } from "react";
import { formFields, formState } from "../data/formFields";
import { ProgressContext } from "../context/ProgressContext";

export const MyForm = () => {
  const [form, setForm] = useState(formState);

  const { setProgress } = useContext(ProgressContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleProgressChange = () => {
    var total = Object.keys(form).length;
    var count = Object.entries(form).reduce((count, ele) => {
      if (ele[1] !== "") count++;
      return count;
    }, 0);
    setProgress((count / total) * 100);
  };

  return (
    <div className="user-data-form">
      <form>
        {formFields.fields.map((ele, index) => {
          return (
            <input
              name={ele.name}
              type={ele.type}
              placeholder={ele.placeholder}
              id={ele.id}
              onChange={handleInputChange}
              key={index}
              onBlur={handleProgressChange}
              onFocus={handleProgressChange}
            ></input>
          );
        })}
      </form>
    </div>
  );
};

export default MyForm;
