import { Handle, NodeProps, Position } from "react-flow-renderer";

type LinearProps = {
   label: string; 
}

const Linear: React.FC<NodeProps<LinearProps>> = (props) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="border-4 border-gray p-2">
        <p>{props.data.label}</p>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default Linear;

