import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useElementPreviewer } from "./element-previewer-root";
import CopyButton from "../copy-button";

function ElementPreviewerCode() {
  const { element } = useElementPreviewer();
  if (!Array.isArray(element.files)) return null;

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Tabs defaultValue={element.files[0]?.name} className="w-full">
        <TabsList className="rounded-none border bg-transparent">
          {element.files.map((file) => (
            <TabsTrigger value={file.name} key={file.name}>
              {file.name}
            </TabsTrigger>
          ))}
        </TabsList>

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
    </motion.div>
  );
}

export default ElementPreviewerCode;
