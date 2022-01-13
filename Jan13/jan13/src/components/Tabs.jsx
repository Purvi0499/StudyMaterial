import React, { useState } from "react";
import { Tab, Tabs, AppBar } from "@mui/material";
export default function TabsMUI() {
  const [value, setValue] = useState(0);
  function handleTabs(e, val) {
    console.warn(val);
    setValue(val);
  }
  return (
    <>
      <h1>Tabs|MaterialUI</h1>
      <AppBar position="static" color="secondary">
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="Item1" />
          <Tab label="Item2" />
          <Tab label="Item3" />
          <Tab label="Item4" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item 1 Details
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item 2 Details
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item 3 Details
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4 Details
      </TabPanel>
    </>
  );
}
function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <>
      <div>{value == index && <h1>{children}</h1>}</div>
    </>
  );
}
