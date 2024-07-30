import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useElementPreviewer } from "./element-previewer-root";

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
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
}

const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    if (isCopied) return;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <button
      className="absolute right-0 top-0 -translate-x-2 translate-y-2"
      onClick={handleCopy}
    >
      <motion.div
        key={isCopied ? "check" : "copy"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </motion.div>
    </button>
  );
};

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

export default ElementPreviewerCode;
