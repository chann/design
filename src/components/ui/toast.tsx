import type { ExternalToast, ToasterProps } from "sonner";
import { toast } from "sonner";

import { Toaster } from "@/components/ui/sonner";

export type ToastOptions = ExternalToast;

export function ToastProvider(props: ToasterProps) {
  return <Toaster {...props} />;
}

export { toast, Toaster };
