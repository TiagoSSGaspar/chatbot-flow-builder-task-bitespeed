import { type KeyCode, useOnSelectionChange } from "@xyflow/react";
import { useState } from "react";

export function useDeleteKeyCodeReactFlowBuilder(): KeyCode | null {
    const [deleteKeyCode, setDeleteKeyCode] = useState<KeyCode | null>(null);

    useOnSelectionChange({
        onChange: ({ nodes }) => {
            if (nodes.length === 0) {
                setDeleteKeyCode("Backspace");
            } else {
                const areNodesNotDeletable = nodes.some(node => node.data.deletable === false);
                setDeleteKeyCode(areNodesNotDeletable ? null : "Backspace");
            }
        },
    });

    return deleteKeyCode;
}
