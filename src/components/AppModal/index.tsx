import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import IAppModalProps from "./types";

function AppModal(props: IAppModalProps) {
  const { showModal, children } = props;

  useEffect(() => {
    if (typeof document === "undefined") return;

    const body = document.body;
    if (!showModal) {
      body.classList.remove("overflow-hidden");
    } else {
      body.classList.add("overflow-hidden");
    }
  }, [showModal]);

  if (typeof document === "undefined") return null;

  const modalContainer = document.getElementById("modal-root");
  if (!modalContainer) return null;

  const portalChildren = (
    <div
      id="modal"
      className="bg-black bg-opacity-50 w-screen h-screen overflow-auto fixed top-0 left-0"
    >
      {children}
    </div>
  );

  return showModal && ReactDOM.createPortal(portalChildren, modalContainer);
}

export default AppModal;
