import { useContext } from "react";
import { RootContext } from "../Context/rootContext";

export const useRootContext = () => useContext(RootContext);
