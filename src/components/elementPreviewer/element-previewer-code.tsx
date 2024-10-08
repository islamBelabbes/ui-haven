import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useElementPreviewer } from "./element-previewer-root";
import CopyButton from "../copy-button";
import { fadeIn, transition } from "@/lib/motion";

function ElementPreviewerCode() {
  const { element } = useElementPreviewer();
  if (!Array.isArray(element.files)) return null;

  return (
    <motion.div
      data-test="code-previewer"
      className="w-full"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={transition}
    >
      <Tabs defaultValue={element.files[0]?.name} className="w-full">
        <ScrollArea>
          <TabsList className="rounded-none border bg-transparent">
            {element.files.map((file) => (
              <TabsTrigger
                value={file.name}
                key={file.name}
                data-test="code-previewer-tab"
              >
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
                data-test="code-previewer-code"
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
