import React from "react";
import { TextField } from "@mui/material";

export default function Form(props) {
  const { inputFields } = props;

  console.log(inputFields);

  return (
    <form>
      {inputFields.map((item) => {
        return (
          <TextField
            id="outlined-basic"
            label={item.label}
            variant="outlined"
            className="input"
            type={item.type}
          />
        );
      })}
    </form>
  );
}
