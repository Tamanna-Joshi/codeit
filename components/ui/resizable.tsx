"use client";

import * as React from "react";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "@/lib/utils";

function ResizablePanelGroup({
  className,
  ...props
}: ResizablePrimitive.GroupProps) {
  return (
    <ResizablePrimitive.Group
      className={cn("h-full w-full", className)}
      {...props}
    />
  );
}

function ResizablePanel(props: ResizablePrimitive.PanelProps) {
  return (
    <ResizablePrimitive.Panel
      data-slot="resizable-panel"
      {...props}
    />
  );
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: ResizablePrimitive.SeparatorProps & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "relative flex w-px items-center justify-center bg-border",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-6 w-1 rounded-lg bg-border" />
      )}
    </ResizablePrimitive.Separator>
  );
}

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
};