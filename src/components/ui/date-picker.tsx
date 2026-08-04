import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type DatePickerProps = {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
};

export function DatePicker({
  value,
  defaultValue,
  onValueChange,
  placeholder = "Pick a date",
  disabled = false,
  id,
  className,
}: DatePickerProps) {
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(
    defaultValue,
  );
  const selected = value ?? internalValue;

  function selectDate(date: Date | undefined) {
    if (value === undefined) setInternalValue(date);
    onValueChange?.(date);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label={
            selected ? `Selected date: ${format(selected, "PPP")}` : placeholder
          }
          className={cn(
            "w-full justify-start text-left font-normal",
            !selected && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
          id={id}
          variant="outline"
        >
          <CalendarIcon aria-hidden="true" data-icon="inline-start" />
          {selected ? format(selected, "PPP") : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          autoFocus
          mode="single"
          onSelect={selectDate}
          selected={selected}
        />
      </PopoverContent>
    </Popover>
  );
}
