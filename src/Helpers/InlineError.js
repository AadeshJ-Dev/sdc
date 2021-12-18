import React from "react";

const inlineError = ({ text, color }) => (
  <p style={{ color: "#ee7979", paddingTop: "10px", fontSize: "15px" }}>
    {text}
  </p>
);

export default inlineError;
