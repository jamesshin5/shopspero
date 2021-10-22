import React from "react";
import '../styles/DesignPopup.css'
 
const DesignPopup = props => {
  return (
    <div ref = {props.reference} className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default DesignPopup;