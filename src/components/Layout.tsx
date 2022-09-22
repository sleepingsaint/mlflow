import { useMLFlowStore } from "hooks/useMLFlowStore";
import React from "react";
import MLFlowContainer from "./MLFlowContainer";
import SideBar from "./SideBar";

const Layout = () => {
  const { getSelectedNode, setNodes, nodes } = useMLFlowStore();
  const selectedNode = getSelectedNode(); 

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
        {selectedNode && (
          <div>
            <input type="text" value={selectedNode.data.label} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
