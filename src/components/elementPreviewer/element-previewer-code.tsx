import React, { useEffect } from "react";

import { codeToHtml } from "shiki";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";
import Spinner from "../ui/spinner";
import { useElementPreviewer } from "./element-previewer-root";

function ElementPreviewerCode() {
  const [html, setHtml] = React.useState(" hey");
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="rounded-none border bg-transparent">
          <TabsTrigger value="account" className="border-r">
            card-info.tsx
          </TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
      </Tabs>

      {html ? (
        <ScrollArea>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="code-previewer max-h-[400px]"
          />
        </ScrollArea>
      ) : (
        <div className="flex justify-center p-5">
          <Spinner />
        </div>
      )}
    </motion.div>
  );
}

export default ElementPreviewerCode;
