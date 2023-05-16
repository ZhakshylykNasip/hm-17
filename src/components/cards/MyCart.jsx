import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const MyCart = () => {
  const navigate = useNavigate()
  const navigateHistory = ()=>{
    navigate(-1)
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "#fff",
        color: "black",
      }}
    >
      <h2>MyCart page</h2>
      <Button onClick={navigateHistory} color='info' variant='contained'  >GO BACK</Button>
    </div>
  );
};
