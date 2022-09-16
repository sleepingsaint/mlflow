import { XYPosition } from "react-flow-renderer";

export const getNewNode = (type: string, position: XYPosition) => {
    const id = Math.random().toString();
    
    if(type === "Conv2d" || type === "Linear") {
        return {
            id: id,
            type: type,
            position,
            data: { label: `${id}_${type}`},
        };
    }

    return {
        id: id,
        type: "input", 
        position,
        data: {
            label: `${id}_custom`
        }
    }
};
