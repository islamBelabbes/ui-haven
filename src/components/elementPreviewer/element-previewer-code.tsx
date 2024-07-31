import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useElementPreviewer } from "./element-previewer-root";
import CopyButton from "../copy-button";

function ElementPreviewerCode() {
  const { element } = useElementPreviewer();
  if (!Array.isArray(element.files)) return null;

  return (
    <div className="w-full">
      <Tabs defaultValue={element.files[0]?.name} className="w-full">
        <ScrollArea>
          <TabsList className="rounded-none border bg-transparent">
            {element.files.map((file) => (
              <TabsTrigger value={file.name} key={file.name}>
                {file.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {element.files.map((file) => (
          <TabsContent value={file.name} key={file.name}>
            <ScrollArea className="relative">
              <CopyButton text={file.code.raw} />
              <div
                dangerouslySetInnerHTML={{ __html: file.code.formatted }}
                className="code-previewer max-h-[400px]"
              />

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default ElementPreviewerCode;
