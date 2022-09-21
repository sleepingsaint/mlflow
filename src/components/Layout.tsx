import { useMLFlowStore } from "hooks/useMLFlowStore";
import React, { useEffect, useState } from "react";
import { useReactFlow, Node } from "react-flow-renderer";
import MLFlowContainer from "./MLFlowContainer";
import SideBar from "./SideBar";

const Layout = () => {
  const { selectedNodeId, setNodes, nodes } = useMLFlowStore();
  const { getNode } = useReactFlow();
  const [selectedNode, setSelectedNode] = useState<Node>();

  useEffect(() => {
    if (selectedNodeId) {
      const node = getNode(selectedNodeId);
      setSelectedNode(node);
    } else {
      setSelectedNode(undefined);
    }
  }, [selectedNodeId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedNode) {
      setNodes(nodes.map(node => {
        if(node.id === selectedNode.id) {
          node.data = {
            ...node.data,
            label: e.target.value,
          }
        }
        return node;
      }))
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <SideBar className="h-full w-32 p-2 overflow-y-scroll bg-slate-200" />
      <MLFlowContainer className="h-full grow" />
      <div className="h-full w-64 bg-slate-100">
        {selectedNodeId && (
          <div>
            <input type="text" value={getNode(selectedNodeId)!.data.label} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
