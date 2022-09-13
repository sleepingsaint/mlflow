import { Handle, Position } from 'react-flow-renderer';

const Conv2d = () => {
  return (
    <>
        <Handle type="target" position={Position.Top} />
        <div>
            <label htmlFor="text">Input</label>
            <input type="text" id="text" />
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle type="source" position={Position.Bottom} id="b" />
    </>
)
}

export default Conv2d