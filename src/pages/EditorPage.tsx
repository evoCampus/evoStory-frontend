import { JSX } from "react";
import FlowCanvas from "../editor/components/FlowCanvas";
import { FlowProvider } from "../editor/FlowContext";

export default function EditorPage(): JSX.Element {
    return (
        <FlowProvider>
            <FlowCanvas />
        </FlowProvider>
    );
};