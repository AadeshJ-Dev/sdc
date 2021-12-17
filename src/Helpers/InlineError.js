import React from "react";
import PropTypes from "prop-types";

const inlineError = ({ text, color }) => (
  <span
    className={color === "#fff" ? "text-white font-weight-bold mb-0" : "text-danger font-weight-bold mb-0"}
  >
    {" "}
    {text}
  </span>
);

inlineError.propTypes = {
  text: PropTypes.string.isRequired,
};
export default inlineError;
