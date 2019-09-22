import React from "react";

function OtherJumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron" id="Sean"
    >
      {children}
    </div>
  );
}

export default OtherJumbotron;
