import { useRef, useState } from "react";
import Child from "./Child";
import "../styles/styles.scss";

export default function Parent() {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef("");
  const handleBtnClick = () => {
    const currValue = inputRef.current.value;
    if (currValue !== "") setInputText(currValue);
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="form-group">
        <input
          className="form-field"
          ref={inputRef}
          type="text"
          placeholder="Enter the text"
        />
        <button
          type="button"
          className="submit-button"
          onClick={handleBtnClick}
        >
          {" "}
          Click here
        </button>
        <br />
      </div>
      <div>
        <Child text={inputText} />
      </div>
    </>
  );
}
