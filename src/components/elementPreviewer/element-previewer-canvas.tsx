import { useElementPreviewer } from "./element-previewer-root";
import * as Elements from "@/elements/components";

function ElementPreviewerCanvas() {
  const { element } = useElementPreviewer();
  const Element =
    Elements[element.attributes.exported as keyof typeof Elements];
  if (!Element) throw new Error("Element not found");

  return (
    <div className="p-4">
      <Element />
    </div>
  );
}

export default ElementPreviewerCanvas;
