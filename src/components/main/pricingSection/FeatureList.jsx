import React from "react";
import CheckIcon from "../../ui/CheckIcon";

const FeatureList = ({ feature }) => {
  return (
    <li>
      <CheckIcon color={`#30B868`} />
      <span>{feature}</span>
    </li>
  );
};

export default FeatureList;
