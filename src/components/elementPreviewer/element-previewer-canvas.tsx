import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useElementPreviewer } from "./element-previewer-root";
import Spinner from "../ui/spinner";
import { convertCase } from "@/lib/utils";

function ElementPreviewerCanvas() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { breakPoint, element } = useElementPreviewer();
  const [iframeHeight, setIframeHeight] = useState(500);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const handleIframeLoad = () => {
        const iframe = iframeRef.current;
        if (iframe) {
          const iframeDoc =
            iframe.contentDocument ?? iframe.contentWindow?.document;
          if (iframeDoc) {
            const html = iframeDoc.querySelector("html");
            if (html) {
              html.style.margin = "10px";
              html.style.display = "flex";
              html.style.justifyContent = "center";
              html.style.alignItems = "center";
              html.style.overflow = "hidden";

              // Set up MutationObserver
              const observer = new MutationObserver(() => {
                const contentHeight = iframeDoc.body.scrollHeight;
                setIframeHeight(contentHeight + 24 * 3);
              });

              observer.observe(iframeDoc.body, {
                attributes: true,
                childList: true,
                subtree: true,
              });

              // Initial height set
              const contentHeight = iframeDoc.body.scrollHeight;
              setIframeHeight(contentHeight + 24 * 3);
              setIsLoaded(true);

              // Clean up observer on unmount
              return () => observer.disconnect();
            }
          }
        }
      };

      const iframe = iframeRef.current;
      if (iframe) {
        iframe.addEventListener("load", handleIframeLoad);
        return () => {
          iframe.removeEventListener("load", handleIframeLoad);
        };
      }
    }
  }, [isClient]);

  if (!isClient) return null;
  element;
  return (
    <div className="relative">
      <motion.iframe
        ref={iframeRef}
        src={`/elements/${convertCase(element.attributes.exported)}`}
        className="my-2 rounded-lg bg-primary/10 p-6"
        style={{
          width: breakPoint,
          height: iframeHeight,
        }}
        initial={{ opacity: 0 }}
        animate={{ width: breakPoint, opacity: isLoaded ? 1 : 0 }}
        transition={{
          duration: 0.1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
          },
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default ElementPreviewerCanvas;
