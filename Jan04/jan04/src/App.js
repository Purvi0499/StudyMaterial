import logo from "./logo.svg";
import "./App.css";
import ErrorDemo from "./components/ErrorBoundaries/ErrorDemo";
import CounterDemo from "./components/ErrorBoundaries/CounterDemo";
import ErrorBoundary from "./components/ErrorBoundaries/ErrorBoundaries";
import PortalExample from "./components/Portals/PortalExample";
import Modal from "./components/Portals/Modal";
import React from "react";
import ModalControl from "./components/Portals/ModalControl";
function App() {
  return (
    <React.Fragment>
      <PortalExample />
      <ModalControl />
      <ErrorBoundary>
        <ErrorDemo name="persistent" />
      </ErrorBoundary>
      <ErrorBoundary>
        <CounterDemo />
      </ErrorBoundary>
    </React.Fragment>
    /* <ErrorDemo name="persitent" /> */
    /* <ErrorBoundary>
        <ErrorDemo name="persistent" />
      </ErrorBoundary>
      <ErrorBoundary>
        <CounterDemo />
      </ErrorBoundary> */
  );
}

export default App;
