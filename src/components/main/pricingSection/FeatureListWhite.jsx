import React from "react";
import CheckIcon from "../../ui/CheckIcon";

const FeatureListWhite = ({ feature }) => {
  return (
    <li>
      <CheckIcon color={`#fff`} />
      <span>{feature}</span>
    </li>
  );
};

export default FeatureListWhite;