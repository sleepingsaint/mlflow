import { useMemo } from "react";
import { modules } from "components/Modules";
import ReactFlow, { MiniMap, Controls, Background, NodeTypes } from "react-flow-renderer";

const MLFlowContainer = () => {
  const nodeTypes: NodeTypes = useMemo(() => modules, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodeTypes={nodeTypes}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default MLFlowContainer;
