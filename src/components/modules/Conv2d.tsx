import { useEffect } from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";

type Conv2dProps = {
  label: string;
}

const Conv2d: React.FC<NodeProps<Conv2dProps>> = (props) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="border-4 border-gray p-2">
        <p>{props.id}</p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default Conv2d;
