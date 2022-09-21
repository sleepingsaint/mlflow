import React, { useCallback, useMemo, useRef, useState } from "react";
import { useMLFlowStore } from "hooks/useMLFlowStore";
import { modules } from "components/modules";
import ReactFlow, { MiniMap, Controls, Background, ReactFlowInstance } from "react-flow-renderer";
import { getNewNode } from "utils";

const MLFlowContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();
  const nodeTypes = useMemo(() => modules, []);
  const {nodes, setNodes, setSelectedNodeId, edges, onNodesChange, onEdgesChange, onConnect} = useMLFlowStore()

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      if (reactFlowWrapper && reactFlowWrapper.current && reactFlowInstance) {
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData("application/reactflow");

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const newNode = getNewNode(type, position);
        setNodes([...nodes, newNode]);
        // setNodes(newNode => [...nodes, newNode]);
      }
    },
    [reactFlowInstance]
  );

  return (
    <div {...props} ref={reactFlowWrapper}>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          onNodeClick={(e, node) => {
            setSelectedNodeId(node.id);
          }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
    </div>
  );
};

export default MLFlowContainer;
