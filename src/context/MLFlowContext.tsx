import React, { createContext, useState } from "react";
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Connection,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
} from "react-flow-renderer";

interface MLFlowState {
    nodes: Node[];
    edges: Edge[];
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    onNodesChange: (changes: NodeChange[]) => void,
    onEdgesChange: (changes: EdgeChange[]) => void,
    onConnect: (connection: Connection) => void,
    selectedNodeId?: string,
    setSelectedNodeId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

// MLFlow Context object
export const MLFlowContext = createContext<MLFlowState>({
    nodes: [],
    edges: [],
    setNodes: () => {},
    setEdges: () => {},
    onNodesChange: (changes) => {},
    onEdgesChange: (changes) => {},
    onConnect: (conn) => {},
    setSelectedNodeId: (node) => {}
});

// Context Provider object
export const MLFlowContextProvider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [selectedNodeId, setSelectedNodeId] = useState<string>();

    const onNodesChange = (changes: NodeChange[]) => {
        setNodes((_nodes) => applyNodeChanges(changes, _nodes));
    };

    const onEdgesChange = (changes: EdgeChange[]) => {
        setEdges((_edges) => applyEdgeChanges(changes, _edges));
    };

    const onConnect = (connection: Connection) => {
        // how to change the connection to smoothstep (rectangular connection)
        // setEdges((_edges) => addEdge({...connection, type: "smoothstep"}, _edges));
        setEdges((_edges) => addEdge(connection, _edges));
    };

    return (
        <MLFlowContext.Provider
            value={{
                nodes,
                edges,
                setNodes,
                setEdges,
                onNodesChange,
                onEdgesChange,
                onConnect,
                selectedNodeId,
                setSelectedNodeId
            }}
        >
            {children}
        </MLFlowContext.Provider>
    );
};
