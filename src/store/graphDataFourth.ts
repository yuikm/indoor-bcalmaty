export interface VertexDataFourth {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeDataFourth {
  id: string;
  from: string;
  to: string;
}
export interface GraphDataFourth {
  vertices: VertexDataFourth[];
  edges: EdgeDataFourth[];
}
export const graphDataFourth: GraphDataFourth = {
  vertices: [
    { id: "v1", objectName: null, cx: 245.7, cy: 550.7 },
    { id: "v2", objectName: "Лифт №1 4 этаж", cx: 270.3, cy: 550.7 },
    { id: "v3", objectName: null, cx: 205.4, cy: 550.7 },
    { id: "v5", objectName: null, cx: 205.4, cy: 662.1 },
    { id: "v6", objectName: null, cx: 205.4, cy: 780.6 },
    { id: "v7", objectName: "Арендатор 423", cx: 205.4, cy: 796 },
    { id: "v8", objectName: null, cx: 157.3, cy: 780.6 },
    { id: "v9", objectName: "Арендатор 424", cx: 157.3, cy: 763.5 },
    { id: "v10", objectName: null, cx: 401.4, cy: 662.1 },
    { id: "v11", objectName: null, cx: 417.2, cy: 662.1 },
    { id: "v12", objectName: "Арендатор 422", cx: 429.7, cy: 662.1 },
    { id: "v13", objectName: null, cx: 205.4, cy: 426.5 },
    { id: "v14", objectName: null, cx: 205.4, cy: 355.6 },
    { id: "v15", objectName: "Арендатор 402", cx: 205.4, cy: 339.1 },
    { id: "v16", objectName: null, cx: 205.4, cy: 386.4 },
    { id: "v17", objectName: "Арендатор 401", cx: 190.5, cy: 386.4 },
    { id: "v18", objectName: null, cx: 417.2, cy: 705.7 },
    { id: "v19", objectName: null, cx: 401.4, cy: 573.7 },
    { id: "v20", objectName: "Туалет №1 4 этаж", cx: 374.9, cy: 573.7 },
    { id: "v21", objectName: null, cx: 401.4, cy: 529.5 },
    { id: "v22", objectName: null, cx: 401.4, cy: 495.9 },
    { id: "v23", objectName: "Арендатор 405", cx: 374.9, cy: 495.9 },
    { id: "v24", objectName: null, cx: 401.4, cy: 462.6 },
    { id: "v25", objectName: "Арендатор 404", cx: 374.9, cy: 462.6 },
    { id: "v26", objectName: null, cx: 401.4, cy: 426.5 },
    { id: "v27", objectName: null, cx: 252.3, cy: 426.5 },
    { id: "v28", objectName: "Арендатор 403", cx: 252.3, cy: 439.1 },
    { id: "v29", objectName: null, cx: 547.3, cy: 529.5 },
    { id: "v30", objectName: "Арендатор 407", cx: 547.3, cy: 516.3 },
    { id: "v31", objectName: null, cx: 834.6, cy: 529.5 },
    { id: "v32", objectName: "Арендатор 407", cx: 834.6, cy: 510.4 },
    { id: "v33", objectName: null, cx: 851.3, cy: 529.5 },
    { id: "v34", objectName: null, cx: 851.3, cy: 522.9 },
    { id: "v35", objectName: null, cx: 943.9, cy: 522.9 },
    { id: "v36", objectName: "Туалет №2 4 этаж", cx: 943.9, cy: 536.9 },
    { id: "v37", objectName: null, cx: 1059.6, cy: 522.9 },
    { id: "v38", objectName: null, cx: 1059.6, cy: 364.3 },
    { id: "v39", objectName: "Арендатор 409", cx: 1043.3, cy: 364.3 },
    { id: "v40", objectName: null, cx: 1298.6, cy: 522.9 },
    { id: "v41", objectName: null, cx: 1059.6, cy: 422.7 },
    { id: "v42", objectName: "Арендатор 410", cx: 1075.1, cy: 422.7 },
    { id: "v43", objectName: null, cx: 1298.6, cy: 366.9 },
    { id: "v44", objectName: "Арендатор 411", cx: 1314.4, cy: 366.9 },
    { id: "v45", objectName: null, cx: 529.3, cy: 705.7 },
    { id: "v46", objectName: "Арендатор 421", cx: 529.3, cy: 691.3 },
    { id: "v47", objectName: null, cx: 564.9, cy: 705.7 },
    { id: "v48", objectName: "Арендатор 420", cx: 564.9, cy: 719.6 },
    { id: "v49", objectName: null, cx: 636, cy: 705.7 },
    { id: "v50", objectName: "Арендатор 419", cx: 636, cy: 691.3 },
    { id: "v53", objectName: null, cx: 723.8, cy: 705.7 },
    { id: "v54", objectName: "Арендатор 418", cx: 723.8, cy: 691.3 },
    { id: "v55", objectName: null, cx: 800.4, cy: 705.7 },
    { id: "v56", objectName: "Арендатор 417", cx: 800.4, cy: 691.3 },
    { id: "v59", objectName: null, cx: 851.5, cy: 705.7 },
    { id: "v60", objectName: null, cx: 918.4, cy: 705.7 },
    { id: "v61", objectName: "Лифт №2 4 этаж", cx: 918.4, cy: 642 },
    { id: "v62", objectName: null, cx: 1033.6, cy: 705.7 },
    { id: "v63", objectName: null, cx: 1033.6, cy: 735.6 },
    { id: "v64", objectName: null, cx: 1033.6, cy: 773 },
    { id: "v65", objectName: "Арендатор 416", cx: 1020, cy: 773 },
    { id: "v66", objectName: null, cx: 1154.6, cy: 735.6 },
    { id: "v67", objectName: "Арендатор 415", cx: 1154.6, cy: 720.6 },
    { id: "v68", objectName: null, cx: 1209.7, cy: 735.6 },
    { id: "v69", objectName: "Арендатор 414", cx: 1209.7, cy: 720.6 },
    { id: "v70", objectName: null, cx: 1291.5, cy: 735.6 },
    { id: "v71", objectName: "Арендатор 413", cx: 1291.5, cy: 749.6 },
    { id: "v72", objectName: null, cx: 1298.6, cy: 735.6 },
    { id: "v73", objectName: null, cx: 1344.3, cy: 735.6 },
    { id: "v74", objectName: "Арендатор 412", cx: 1344.3, cy: 720.6 },
    { id: "v75", objectName: "Арендатор 406", cx: 430.4, cy: 573.7 },
    { id: "v76", objectName: "Арендатор 408", cx: 547.3, cy: 549.1 },
    { id: "v77", objectName: null, cx: 205.4, cy: 578.2 },
    { id: "v78", objectName: "Арендатор 400", cx: 191.3, cy: 578.2 },
  ],

  edges: [
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v1_to_v3", from: "v1", to: "v3" },
    { id: "v3_to_v77", from: "v3", to: "v77" },
    { id: "v77_to_v78", from: "v77", to: "v78" },
    { id: "v77_to_v5", from: "v77", to: "v5" },
    { id: "v5_to_v6", from: "v5", to: "v6" },
    { id: "v6_to_v7", from: "v6", to: "v7" },
    { id: "v6_to_v8", from: "v6", to: "v8" },
    { id: "v8_to_v9", from: "v8", to: "v9" },
    { id: "v5_to_v10", from: "v5", to: "v10" },
    { id: "v3_to_v13", from: "v3", to: "v13" },
    { id: "v13_to_v16", from: "v13", to: "v16" },
    { id: "v14_to_v15", from: "v14", to: "v15" },
    { id: "v14_to_v16", from: "v14", to: "v16" },
    { id: "v16_to_v17", from: "v16", to: "v17" },
    { id: "v10_to_v11", from: "v10", to: "v11" },
    { id: "v11_to_v12", from: "v11", to: "v12" },
    { id: "v11_to_v18", from: "v11", to: "v18" },
    { id: "v18_to_v45", from: "v18", to: "v45" },
    { id: "v45_to_v46", from: "v45", to: "v46" },
    { id: "v45_to_v47", from: "v45", to: "v47" },
    { id: "v47_to_v48", from: "v47", to: "v48" },
    { id: "v47_to_v49", from: "v47", to: "v49" },
    { id: "v49_to_v50", from: "v49", to: "v50" },
    { id: "v49_to_v53", from: "v49", to: "v53" },
    { id: "v53_to_v54", from: "v53", to: "v54" },
    { id: "v53_to_v55", from: "v53", to: "v55" },
    { id: "v55_to_v56", from: "v55", to: "v56" },
    { id: "v55_to_v59", from: "v55", to: "v59" },
    { id: "v59_to_v60", from: "v59", to: "v60" },
    { id: "v60_to_v61", from: "v60", to: "v61" },
    { id: "v60_to_v62", from: "v60", to: "v62" },
    { id: "v62_to_v63", from: "v62", to: "v63" },
    { id: "v63_to_v64", from: "v63", to: "v64" },
    { id: "v64_to_v65", from: "v64", to: "v65" },
    { id: "v63_to_v66", from: "v63", to: "v66" },
    { id: "v66_to_v67", from: "v66", to: "v67" },
    { id: "v66_to_v68", from: "v66", to: "v68" },
    { id: "v68_to_v70", from: "v68", to: "v70" },
    { id: "v68_to_v69", from: "v68", to: "v69" },
    { id: "v70_to_v71", from: "v70", to: "v71" },
    { id: "v70_to_v72", from: "v70", to: "v72" },
    { id: "v72_to_v73", from: "v72", to: "v73" },
    { id: "v73_to_v74", from: "v73", to: "v74" },
    { id: "v72_to_v40", from: "v72", to: "v40" },
    { id: "v40_to_v43", from: "v40", to: "v43" },
    { id: "v41_to_v42", from: "v41", to: "v42" },
    { id: "v43_to_v44", from: "v43", to: "v44" },
    { id: "v13_to_v27", from: "v13", to: "v27" },
    { id: "v27_to_v28", from: "v27", to: "v28" },
    { id: "v27_to_v26", from: "v27", to: "v26" },
    { id: "v26_to_v24", from: "v26", to: "v24" },
    { id: "v24_to_v25", from: "v24", to: "v25" },
    { id: "v24_to_v22", from: "v24", to: "v22" },
    { id: "v22_to_v23", from: "v22", to: "v23" },
    { id: "v22_to_v21", from: "v22", to: "v21" },
    { id: "v21_to_v19", from: "v21", to: "v19" },
    { id: "v19_to_v20", from: "v19", to: "v20" },
    { id: "v19_to_v10", from: "v19", to: "v10" },
    { id: "v21_to_v29", from: "v21", to: "v29" },
    { id: "v29_to_v30", from: "v29", to: "v30" },
    { id: "v29_to_v31", from: "v29", to: "v31" },
    { id: "v31_to_v32", from: "v31", to: "v32" },
    { id: "v31_to_v33", from: "v31", to: "v33" },
    { id: "v33_to_v59", from: "v33", to: "v59" },
    { id: "v33_to_v34", from: "v33", to: "v34" },
    { id: "v34_to_v35", from: "v34", to: "v35" },
    { id: "v35_to_v36", from: "v35", to: "v36" },
    { id: "v35_to_v37", from: "v35", to: "v37" },
    { id: "v37_to_v41", from: "v37", to: "v41" },
    { id: "v41_to_v38", from: "v41", to: "v38" },
    { id: "v38_to_v39", from: "v38", to: "v39" },
    { id: "v37_to_v40", from: "v37", to: "v40" },
    { id: "v19_to_v75", from: "v19", to: "v75" },
    { id: "v29_to_v76", from: "v29", to: "v76" },
  ],
};
