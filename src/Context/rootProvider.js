/* eslint-disable react/jsx-no-constructed-context-values */
import React from "react";
import PropTypes from "prop-types";
import { RootContext } from "./rootContext";

function RootProvider({ children }) {
  return (
    <RootContext.Provider value={{ name: "test" }}>
      {children}
    </RootContext.Provider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootProvider;
