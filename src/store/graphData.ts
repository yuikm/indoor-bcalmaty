export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}
export const graphData: GraphData = {
  vertices: [
    { id: "v1", objectName: null, cx: 482.1, cy: 561 },
    { id: "v2", objectName: "Лифт 1", cx: 506.8, cy: 561 },
    { id: "v3", objectName: "Охрана", cx: 384.2, cy: 607.4 },
    { id: "v4", objectName: "Тамбур", cx: 291.9, cy: 656.5 },
    { id: "v5", objectName: null, cx: 436.7, cy: 560.6 },
    { id: "v6", objectName: null, cx: 384.2, cy: 561 },
    { id: "v7", objectName: null, cx: 325.1, cy: 561 },
    { id: "v8", objectName: null, cx: 325.1, cy: 656.5 },
    { id: "v9", objectName: null, cx: 325.1, cy: 676.3 },
    { id: "v10", objectName: null, cx: 437.2, cy: 676.3 },
    { id: "v11", objectName: "Арендатор 116", cx: 437.2, cy: 690 },
    { id: "v12", objectName: null, cx: 630.3, cy: 676.3 },
    { id: "v13", objectName: "Арендатор 115", cx: 630.3, cy: 690 },
    { id: "v14", objectName: null, cx: 661.9, cy: 676.3 },
    { id: "v15", objectName: "Арендатор 106", cx: 661.9, cy: 661.7 },
    { id: "v16", objectName: null, cx: 384.2, cy: 434.7 },
    { id: "v17", objectName: "Арендатор 100", cx: 384.2, cy: 420 },
    { id: "v18", objectName: null, cx: 506.1, cy: 434.7 },
    { id: "v19", objectName: "Арендатор 101", cx: 506.1, cy: 449.4 },
    { id: "v20", objectName: null, cx: 533, cy: 434.7 },
    { id: "v21", objectName: "Арендатор 102", cx: 533, cy: 420 },
    { id: "v22", objectName: null, cx: 630.3, cy: 434.7 },
    { id: "v23", objectName: null, cx: 630.3, cy: 468.2 },
    { id: "v24", objectName: "Арендатор 103", cx: 611.4, cy: 468.2 },
    { id: "v25", objectName: null, cx: 630.3, cy: 506.2 },
    { id: "v26", objectName: "Арендатор 104", cx: 611.4, cy: 506.2 },
    { id: "v27", objectName: null, cx: 630.3, cy: 539.6 },
    { id: "v28", objectName: null, cx: 630.3, cy: 583.8 },
    { id: "v29", objectName: "Туалет 1", cx: 611.9, cy: 583.8 },
    { id: "v30", objectName: null, cx: 665.8, cy: 539.6 },
    { id: "v31", objectName: "Арендатор 105", cx: 665.8, cy: 556.2 },
    { id: "v32", objectName: null, cx: 880.7, cy: 539.6 },
    { id: "v33", objectName: "Арендатор 107", cx: 880.7, cy: 526.8 },
    { id: "v34", objectName: null, cx: 1070.5, cy: 539.6 },
    { id: "v35", objectName: "Арендатор 108", cx: 1070.5, cy: 527.7 },
  ],

  edges: [{ id: "v1_to_v2", from: "v1", to: "v2" }],
};
