import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visiblle active" onClick={props.onDismiss}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div
          className="header white-text"
          style={{ background: "#1b1c1d" }}
        >
          {props.title}
        </div>
        <div
          className="content white-text"
          style={{ background: "#292929" }}
        >
          {props.content}
        </div>
        <div className="actions" style={{ background: "#1b1c1d" }}>
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
