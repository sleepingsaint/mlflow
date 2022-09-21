import { useEffect } from "react";
import { Handle, NodeProps, Position, useReactFlow } from "react-flow-renderer";

type Conv2dProps = {
  label: string;
}

const Conv2d: React.FC<NodeProps<Conv2dProps>> = (props) => {
  const { getNode } = useReactFlow();
  const node = getNode(props.id);

  useEffect(() => {
    console.log(node)
  }, [node])
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="border-4 border-gray p-2">
        <p>{node!.data.label}</p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default Conv2d;
