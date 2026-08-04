import * as React from "react";
import { AtSignIcon } from "lucide-react";

import type { SpecimenProps } from "@/components/specimens/specimen-registry";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

function CalendarSpecimen() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="specimen-stage flex-col gap-3">
      <Calendar mode="single" onSelect={setDate} selected={date} />
      <span className="text-xs text-muted-foreground">
        {date ? date.toLocaleDateString() : "No date selected"}
      </span>
    </div>
  );
}

function CheckboxSpecimen() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div className="specimen-stage">
      <FieldGroup className="max-w-md">
        <Field orientation="horizontal">
          <Checkbox
            checked={checked}
            id="specimen-release-notes"
            onCheckedChange={(value) => setChecked(value === true)}
          />
          <FieldLabel htmlFor="specimen-release-notes">
            Send release notes
          </FieldLabel>
        </Field>
        <Field data-disabled="true" orientation="horizontal">
          <Checkbox disabled id="specimen-managed" />
          <FieldLabel htmlFor="specimen-managed">
            Managed by organization
          </FieldLabel>
        </Field>
      </FieldGroup>
    </div>
  );
}

const frameworks = ["React", "Vue", "Svelte", "Solid"];

function ComboboxSpecimen() {
  return (
    <div className="specimen-stage">
      <Field className="max-w-sm">
        <FieldLabel>Framework</FieldLabel>
        <Combobox items={frameworks}>
          <ComboboxInput placeholder="Search frameworks" showClear />
          <ComboboxContent>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            <ComboboxList>
              {(framework: string) => (
                <ComboboxItem key={framework} value={framework}>
                  {framework}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <FieldDescription>
          Type to filter, then choose one result.
        </FieldDescription>
      </Field>
    </div>
  );
}

function CommandSpecimen() {
  const [query, setQuery] = React.useState("");
  return (
    <div className="specimen-stage">
      <Command className="max-w-md border shadow-sm">
        <CommandInput
          onValueChange={setQuery}
          placeholder="Search actions"
          value={query}
        />
        <CommandList>
          <CommandEmpty>
            <div className="flex flex-col items-center gap-2">
              <span>No action found.</span>
              <Button onClick={() => setQuery("")} size="sm" variant="ghost">
                Reset search
              </Button>
            </div>
          </CommandEmpty>
          <CommandGroup heading="Document">
            <CommandItem value="open design source">Open DESIGN.md</CommandItem>
            <CommandItem value="copy component link">
              Copy component link
            </CommandItem>
            <CommandItem value="toggle dark theme">Toggle theme</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

function DatePickerSpecimen() {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="specimen-stage">
      <Field className="max-w-xs">
        <FieldLabel htmlFor="specimen-date">Review date</FieldLabel>
        <DatePicker id="specimen-date" onValueChange={setDate} value={date} />
        <FieldDescription>
          The selected value remains visible after closing.
        </FieldDescription>
      </Field>
    </div>
  );
}

function FieldSpecimen() {
  return (
    <div className="specimen-stage">
      <FieldGroup className="max-w-md">
        <Field>
          <FieldLabel htmlFor="specimen-project">Project name</FieldLabel>
          <Input defaultValue="Comfort" id="specimen-project" />
          <FieldDescription>
            Shown in generated reference pages.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Switch id="specimen-auto-save" />
          <div>
            <FieldTitle>Auto-save drafts</FieldTitle>
            <FieldDescription>Save after a short idle period.</FieldDescription>
          </div>
        </Field>
      </FieldGroup>
    </div>
  );
}

function InputSpecimen() {
  const [value, setValue] = React.useState("comfort.design");
  const [error, setError] = React.useState("");
  return (
    <div className="specimen-stage">
      <form
        className="flex w-full max-w-md flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          setError(
            value.includes("@") ? "" : "Enter a complete email address.",
          );
        }}
      >
        <Field data-invalid={Boolean(error)}>
          <FieldLabel htmlFor="specimen-email">Work email</FieldLabel>
          <Input
            aria-describedby="specimen-email-error"
            aria-invalid={Boolean(error)}
            id="specimen-email"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <FieldDescription id="specimen-email-error">
            {error || "Validation preserves the entered value."}
          </FieldDescription>
        </Field>
        <Button className="w-fit" type="submit">
          Validate email
        </Button>
      </form>
    </div>
  );
}

function InputGroupSpecimen() {
  return (
    <div className="specimen-stage">
      <Field className="max-w-md">
        <FieldLabel htmlFor="specimen-domain">Project address</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>comfort.dev/</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput defaultValue="design" id="specimen-domain" />
          <InputGroupAddon align="inline-end">
            <AtSignIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </div>
  );
}

function InputOTPSpecimen() {
  const [value, setValue] = React.useState("");
  return (
    <div className="specimen-stage flex-col gap-3">
      <Label htmlFor="specimen-otp">Verification code</Label>
      <InputOTP
        id="specimen-otp"
        maxLength={6}
        onChange={setValue}
        value={value}
      >
        <InputOTPGroup>
          {[0, 1, 2].map((index) => (
            <InputOTPSlot index={index} key={index} />
          ))}
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          {[3, 4, 5].map((index) => (
            <InputOTPSlot index={index} key={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <span className="text-xs text-muted-foreground">
        Paste is supported · {value.length}/6 digits
      </span>
    </div>
  );
}

function LabelSpecimen() {
  return (
    <div className="specimen-stage">
      <div className="flex w-full max-w-sm flex-col gap-2">
        <Label htmlFor="specimen-label-input">Reference label</Label>
        <Input id="specimen-label-input" placeholder="Name this reference" />
      </div>
    </div>
  );
}

function NativeSelectSpecimen() {
  return (
    <div className="specimen-stage">
      <Field className="max-w-xs">
        <FieldLabel htmlFor="specimen-native-select">Locale</FieldLabel>
        <NativeSelect defaultValue="ko" id="specimen-native-select">
          <NativeSelectOptGroup label="Language editions">
            <NativeSelectOption value="ko">한국어</NativeSelectOption>
            <NativeSelectOption value="en">English</NativeSelectOption>
            <NativeSelectOption value="ja">日本語</NativeSelectOption>
            <NativeSelectOption value="zh-CN">简体中文</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </Field>
    </div>
  );
}

function RadioGroupSpecimen() {
  return (
    <div className="specimen-stage">
      <FieldGroup className="max-w-sm">
        <Label>Interface density</Label>
        <RadioGroup defaultValue="comfortable">
          {["Compact", "Comfortable", "Spacious"].map((option) => {
            const value = option.toLowerCase();
            return (
              <Field key={value} orientation="horizontal">
                <RadioGroupItem id={`density-${value}`} value={value} />
                <FieldLabel htmlFor={`density-${value}`}>{option}</FieldLabel>
              </Field>
            );
          })}
        </RadioGroup>
      </FieldGroup>
    </div>
  );
}

function SelectSpecimen() {
  return (
    <div className="specimen-stage">
      <Field className="max-w-xs">
        <FieldLabel>Review status</FieldLabel>
        <Select defaultValue="ready">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="ready">Ready for review</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
}

function SliderSpecimen() {
  const [value, setValue] = React.useState([64]);
  return (
    <div className="specimen-stage flex-col gap-4">
      <div className="flex w-full max-w-md justify-between text-sm">
        <Label htmlFor="specimen-slider">Content width</Label>
        <span className="font-mono text-xs text-muted-foreground">
          {value[0]} rem
        </span>
      </div>
      <Slider
        aria-label="Content width"
        className="max-w-md"
        id="specimen-slider"
        max={80}
        min={40}
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
}

function SwitchSpecimen() {
  const [enabled, setEnabled] = React.useState(true);
  return (
    <div className="specimen-stage">
      <Field className="max-w-md" orientation="horizontal">
        <div className="flex-1">
          <FieldTitle>Release notifications</FieldTitle>
          <FieldDescription>
            {enabled ? "Notifications are on." : "Notifications are off."}
          </FieldDescription>
        </div>
        <Switch
          aria-label="Release notifications"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
      </Field>
    </div>
  );
}

function TextareaSpecimen() {
  const [value, setValue] = React.useState("");
  return (
    <div className="specimen-stage">
      <Field className="max-w-lg">
        <FieldLabel htmlFor="specimen-notes">Review notes</FieldLabel>
        <Textarea
          id="specimen-notes"
          maxLength={240}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Describe the state that needs review."
          value={value}
        />
        <FieldDescription>{value.length}/240 characters</FieldDescription>
      </Field>
    </div>
  );
}

export const formSpecimens = {
  calendar: CalendarSpecimen,
  checkbox: CheckboxSpecimen,
  combobox: ComboboxSpecimen,
  command: CommandSpecimen,
  "date-picker": DatePickerSpecimen,
  field: FieldSpecimen,
  input: InputSpecimen,
  "input-group": InputGroupSpecimen,
  "input-otp": InputOTPSpecimen,
  label: LabelSpecimen,
  "native-select": NativeSelectSpecimen,
  "radio-group": RadioGroupSpecimen,
  select: SelectSpecimen,
  slider: SliderSpecimen,
  switch: SwitchSpecimen,
  textarea: TextareaSpecimen,
} satisfies Record<string, React.ComponentType<SpecimenProps>>;
