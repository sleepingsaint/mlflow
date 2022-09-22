import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "react-flow-renderer";
import create from "zustand";

interface MLFlowState {
  nodes: Node[];
  edges: Edge[];
  addNode: (node: Node) => void;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  onConnect: OnConnect;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;

  selectedNodeId?: string;
  selectedEdgeId?: string;
  setSelectedNodeId: (id: string) => void;
  setSelectedEdgeId: (id: string) => void;
  getSelectedNode: () => Node | undefined
}

export const useMLFlowStore = create<MLFlowState>((set, get) => ({
  nodes: [],
  edges: [],
  addNode: (node) => set({ nodes: [...get().nodes, node ]}),
  setNodes: (nodes) => set({ nodes: [...nodes] }),
  setEdges: (edges) => set({ edges: [...edges] }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  setSelectedEdgeId: (id) => set({ selectedEdgeId: id }),
  onConnect: (connection: Connection) => set({ edges: addEdge(connection, get().edges) }),
  onNodesChange: (changes: NodeChange[]) => set({ nodes: applyNodeChanges(changes, get().nodes) }),
  onEdgesChange: (changes: EdgeChange[]) => set({ edges: applyEdgeChanges(changes, get().edges) }),
  getSelectedNode: () => get().nodes.find(n => n.id === get().selectedNodeId)
}));
