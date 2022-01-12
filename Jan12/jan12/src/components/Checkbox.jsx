import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
function Checkboxes() {
  const [name, setName] = useState([]);
  function clickme(e) {
    let data = name;
    data.push(e.target.value);
    console.warn(data);
  }
  return (
    <>
      <h1>Checkbox</h1>
      <Checkbox
        value={"Anil"}
        onChange={(e) => {
          clickme(e);
        }}
      />
      <Checkbox
        value={"Sami"}
        onChange={(e) => {
          clickme(e);
        }}
      />
      <Checkbox
        value={"Purvi"}
        onChange={(e) => {
          clickme(e);
        }}
      />
      <Checkbox
        value={"xyz"}
        indeterminate
        onChange={(e) => {
          clickme(e);
        }}
      />
      <Checkbox
        value={"puru"}
        color="secondary"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onChange={(e) => {
          clickme(e);
        }}
      />
    </>
  );
}
export default Checkboxes;
