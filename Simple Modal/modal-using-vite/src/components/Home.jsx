import { useState } from "react";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const handleBtnClick = () => {
    setToggleModal((toggleModal) => !toggleModal);
  };
  return (
    <>
      <h1>Home Page</h1>
      <button className="toggle-button" onClick={handleBtnClick}>
        Click here
      </button>
    </>
  );
}
