import React from "react";
import { createPortal } from "react-dom";
export default function Modal(isOpened) {
  if (!isOpened) {
    return null;
  }
  return createPortal(<div>Modal</div>, document.getElementById("modal"));
}
