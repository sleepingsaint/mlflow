// import your module here
import { NodeTypes } from "react-flow-renderer";
import Conv2d from "components/modules/Conv2d";
import Linear from "components/modules/Linear";

// register your module here
export const modules: NodeTypes = {
    "Conv2d": Conv2d,
    "Linear": Linear
};
