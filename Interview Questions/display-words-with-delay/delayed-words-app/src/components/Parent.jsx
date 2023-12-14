import { useRef, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef("");
  const handleBtnClick = () => {
    const currValue = inputRef.current.value;
    if (currValue !== "") setInputText(currValue);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input
        type="text"
        className="input-box"
        placeholder="Enter the text to display"
        ref={inputRef}
      />
      <br />
      <button type="button" className="submit-button" onClick={handleBtnClick}>
        {" "}
        Click here
      </button>
      <br />
      <Child text={inputText} />
    </div>
  );
}
