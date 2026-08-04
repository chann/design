import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type CatalogContractSpecimenProps = {
  title: string;
  anatomy: string[];
  states: string[];
};

export function CatalogContractSpecimen({
  title,
  anatomy,
  states,
}: CatalogContractSpecimenProps) {
  return (
    <Card className="overflow-hidden bg-muted/25">
      <CardHeader className="border-b bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle>{title} contract</CardTitle>
          <Badge variant="outline">Reference view</Badge>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          This page publishes the Comfort structure and state contract. Its
          interactive specimen is added only when the local component source is
          available and verified.
        </p>
      </CardHeader>
      <CardContent className="grid gap-6 p-6 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-primary">
            Anatomy
          </p>
          <ol className="flex flex-col gap-2">
            {anatomy.map((part, index) => (
              <li className="flex gap-3 text-sm leading-6" key={part}>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {part}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-primary">
            Required states
          </p>
          <div className="flex flex-wrap gap-2">
            {states.map((state) => (
              <Badge variant="secondary" key={state}>
                {state}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
