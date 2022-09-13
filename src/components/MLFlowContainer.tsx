import { useMemo } from "react";
import { useMLFlow } from "hooks/useMLFlow";
import { modules } from "components/modules";
import ReactFlow, { MiniMap, Controls, Background, Node } from "react-flow-renderer";

const MLFlowContainer = () => {
  const nodeTypes = useMemo(() => modules, []);
  const { setNodes, setEdges, ...reactFlowProps } = useMLFlow();

  const handleAddNode = () => {
    const node: Node<any> = {
      id: Math.random().toString(),
      position: { x: 100, y: 100 },
      data: {
        label: "label",
      },
    };
    setNodes((_nodes) => [..._nodes, node]);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button onClick={handleAddNode}>Click Me</button>
      <ReactFlow nodeTypes={nodeTypes} {...reactFlowProps}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default MLFlowContainer;
