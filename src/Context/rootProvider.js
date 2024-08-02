/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { RootContext } from "./rootContext";
import { initialState } from "../Lib/constants";

function RootProvider({ children }) {
  const [data, setData] = useState(initialState);
  const values = useMemo(() => ({
    data,
    setData,
  }));
  return <RootContext.Provider value={values}>{children}</RootContext.Provider>;
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootProvider;
