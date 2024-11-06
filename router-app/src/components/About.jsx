import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/support");
  }
  return (
    <div>
      <div>This is about page</div>
      <button onClick={clickHandler}>Move to Support page</button>
    </div>
  );
}
