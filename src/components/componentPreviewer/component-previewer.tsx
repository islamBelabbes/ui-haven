"use client";
import React from "react";
import Previewer from "./previewer";
import PreviewerHeader from "./Previewer-header";

function ComponentPreviewer() {
  return (
    <div className="w-full max-w-7xl rounded">
      <PreviewerHeader />

      <div className="flex items-center justify-center border p-4">
        <Previewer />
      </div>
    </div>
  );
}

export default ComponentPreviewer;
