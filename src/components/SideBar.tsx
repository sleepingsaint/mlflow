import React from "react";

const SideBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div {...props}>
      <li draggable className="w-full p-2 px-4 list-none bg-slate-300 mt-2" onDragStart={(e) => onDragStart(e, "Conv2d")}>
        Conv2d
      </li>
      <li draggable className="w-full p-2 px-4 list-none bg-slate-300 mt-2" onDragStart={(e) => onDragStart(e, "Linear")}>
        Linear 
      </li>
    </div>
  );
};

export default SideBar;
