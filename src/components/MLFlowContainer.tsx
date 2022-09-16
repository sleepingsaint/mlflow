import React, { useCallback, useMemo, useRef, useState } from "react";
import { useMLFlow } from "hooks/useMLFlow";
import { modules } from "components/modules";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  ReactFlowProvider,
  ReactFlowInstance,
} from "react-flow-renderer";
import { getNewNode } from "utils";

const MLFlowContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();
  const nodeTypes = useMemo(() => modules, []);
  const { setNodes, setEdges, ...reactFlowProps } = useMLFlow();

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
        setNodes(nds => [...nds, newNode]);
      }
    },
    [reactFlowInstance]
  );

  return (
    <div {...props} ref={reactFlowWrapper}>
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          {...reactFlowProps}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default MLFlowContainer;
