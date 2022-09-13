import { Handle, Position } from "react-flow-renderer";

const Conv2d = () => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <p>Conv2d</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </>
  );
};

export default Conv2d;
