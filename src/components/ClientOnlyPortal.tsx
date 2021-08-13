import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  selector: string;
}

/* Adapted from https://github.com/vercel/next.js/tree/canary/examples/with-portals */
const ClientOnlyPortal: React.FC<Props> = ({ children, selector }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  if (ref.current) {
    return mounted ? createPortal(children, ref.current) : null;
  }

  return null;
};

export default ClientOnlyPortal;
