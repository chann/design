import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function FooterSignature() {
  const signatureRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const signature = signatureRef.current;
    if (!signature) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(signature);
      },
      { rootMargin: "0px 0px -5%", threshold: 0.08 },
    );

    observer.observe(signature);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn("footer-signature", visible && "is-visible")}
      ref={signatureRef}
    >
      <span className="sr-only">
        Comfort Design System, documented in DESIGN.md
      </span>
      <span aria-hidden="true" className="footer-signature-text">
        Comfort / DESIGN.md
      </span>
    </div>
  );
}
