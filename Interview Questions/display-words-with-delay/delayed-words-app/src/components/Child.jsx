import { useEffect, useState } from "react";
import '../styles/styles.scss';
export default function Child(props) {
  /* eslint-disable react/prop-types */
  const { text } = props;
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    console.log("useEffect called");
    const words = text.split(" ");
    let i = 0;
    let n = words.length;
    let intervalId = null;
    let result = "";
    intervalId = setInterval(() => {
      if (i >= n) {
        console.log("Interval cleared");
        clearInterval(intervalId);
      } else {
        result += words[i];
        result += " ";
        setDisplayText(result);
        i++;
      }
    }, 2000);
    return () => {
      // setDisplayText("");
      clearInterval(intervalId);
    };
  }, [text]);

  return <div className="display-text">{displayText}</div>;
}
