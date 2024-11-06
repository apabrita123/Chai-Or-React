import React from "react";
import { useNavigate } from "react-router-dom";

export default function Support() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/labs");
  }

  function backhandler() {
    navigate(-1);
  }
  return (
    <div>
      <div>This is Support page!</div>
      <button onClick={clickHandler}>Move to Labs page</button>
      <button onClick={backhandler}>Back bro</button>
    </div>
  );
}
