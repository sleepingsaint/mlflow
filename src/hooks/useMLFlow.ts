import { MLFlowContext } from "context/MLFlowContext";
import { useContext } from "react";

export const useMLFlow = () => {
    return useContext(MLFlowContext);
}