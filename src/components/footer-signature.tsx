import { type CSSProperties, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const signatureText = "Comfort DESIGN.md";

export function FooterSignature({
  accessibleLabel = "Comfort DESIGN.md",
}: {
  accessibleLabel?: string;
}) {
  const signatureRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const signature = signatureRef.current;
    if (!signature) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
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
      <span className="sr-only">{accessibleLabel}</span>
      <span aria-hidden="true" className="footer-signature-text">
        {Array.from(signatureText).map((character, index) => (
          <span
            className="footer-signature-letter"
            key={`${character}-${index}`}
            style={{ "--footer-signature-index": index } as CSSProperties}
          >
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </span>
    </div>
  );
}
