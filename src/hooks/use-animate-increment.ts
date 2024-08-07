import { animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function useAnimateIncrement({
  from,
  to,
}: {
  from: number;
  to: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        setCount(+value.toFixed(0));
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return count;
}
