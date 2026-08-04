import * as React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  FileTextIcon,
  FolderIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react";

import type { SpecimenProps } from "@/components/specimens/specimen-registry";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DirectionProvider } from "@/components/ui/direction";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function BreadcrumbSpecimen() {
  return (
    <div className="specimen-stage">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">DESIGN.md</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function ContextMenuSpecimen() {
  return (
    <div className="specimen-stage">
      <ContextMenu>
        <ContextMenuTrigger className="grid min-h-40 w-full max-w-lg place-items-center rounded-xl border border-dashed bg-muted/25 text-sm text-muted-foreground">
          Right-click this reference surface
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Reference actions</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Copy link <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Open DESIGN.md</ContextMenuItem>
          <ContextMenuItem variant="destructive">Remove draft</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

function DialogSpecimen() {
  return (
    <div className="specimen-stage">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Publish reference</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Publish this reference?</DialogTitle>
            <DialogDescription>
              The current DESIGN.md and component guidance will become public.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Publish</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DirectionSpecimen() {
  const [direction, setDirection] = React.useState<"ltr" | "rtl">("ltr");
  return (
    <DirectionProvider dir={direction}>
      <div className="specimen-stage flex-col gap-5" dir={direction}>
        <div className="flex gap-2" dir="ltr">
          <Button
            aria-pressed={direction === "ltr"}
            onClick={() => setDirection("ltr")}
            size="sm"
            variant={direction === "ltr" ? "default" : "outline"}
          >
            LTR
          </Button>
          <Button
            aria-pressed={direction === "rtl"}
            onClick={() => setDirection("rtl")}
            size="sm"
            variant={direction === "rtl" ? "default" : "outline"}
          >
            RTL
          </Button>
        </div>
        <div className="flex w-full max-w-lg items-center justify-between rounded-xl border bg-card p-4">
          <ArrowLeftIcon />
          <span className="text-sm">
            {direction === "ltr" ? "Previous" : "السابق"}
          </span>
          <ArrowRightIcon />
        </div>
      </div>
    </DirectionProvider>
  );
}

function DrawerSpecimen() {
  return (
    <div className="specimen-stage">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open review drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-lg">
            <DrawerHeader>
              <DrawerTitle>Review summary</DrawerTitle>
              <DrawerDescription>
                Four states and three accessibility checks are ready.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Done</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function DropdownMenuSpecimen() {
  return (
    <div className="specimen-stage">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Reference actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Document</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Open DESIGN.md</DropdownMenuItem>
          <DropdownMenuItem>Copy link</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            Remove draft
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function HoverCardSpecimen() {
  return (
    <div className="specimen-stage">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            className="text-sm font-medium text-primary underline underline-offset-4"
            href="#hover-card"
          >
            DESIGN.md
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <strong className="text-sm">Product design guide</strong>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Tokens, component behavior, content rules, and release checks in one
            readable source.
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

function MenubarSpecimen() {
  return (
    <div className="specimen-stage">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New reference <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Open DESIGN.md</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Export</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Preview</MenubarItem>
            <MenubarItem>View code</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

function NavigationMenuSpecimen() {
  return (
    <div className="specimen-stage items-start">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>System</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[22rem] gap-2 p-3 sm:grid-cols-2">
                {["Principles", "Foundations", "Components", "DESIGN.md"].map(
                  (item) => (
                    <NavigationMenuLink
                      className="rounded-lg p-3 text-sm hover:bg-muted"
                      href="#"
                      key={item}
                    >
                      {item}
                    </NavigationMenuLink>
                  ),
                )}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">GitHub</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function PaginationSpecimen() {
  return (
    <div className="specimen-stage">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {[1, 2, 3].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink href="#" isActive={page === 2}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

function PopoverSpecimen() {
  return (
    <div className="specimen-stage">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open details</Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-72">
          <strong className="text-sm">Component state</strong>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Default, hover, focus-visible, disabled, and loading are documented.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function SheetSpecimen() {
  return (
    <div className="specimen-stage">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open settings</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Reference settings</SheetTitle>
            <SheetDescription>
              Choose how this component appears in the catalog.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4 text-sm text-muted-foreground">
            Settings stay close to the current context without replacing it.
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Save settings</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function SidebarSpecimen() {
  const items = [
    [HomeIcon, "Overview"],
    [FolderIcon, "Foundations"],
    [FileTextIcon, "Components"],
    [SettingsIcon, "Settings"],
  ] as const;
  return (
    <div className="specimen-stage specimen-stage-flush">
      <SidebarProvider
        className="!min-h-72 max-w-2xl overflow-hidden rounded-xl border"
        style={{ "--sidebar-width": "13rem" } as React.CSSProperties}
      >
        <Sidebar collapsible="none">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Comfort</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map(([Icon, label], index) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton isActive={index === 2}>
                        <Icon /> <span>{label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="min-w-0 p-5">
          <strong className="text-sm">Components</strong>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            The active destination uses a filled state without a divider rail.
          </p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

function TabsSpecimen() {
  return (
    <div className="specimen-stage">
      <Tabs className="w-full max-w-lg" defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="states">States</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>
        <TabsContent
          className="rounded-xl border p-5 text-sm leading-6"
          value="preview"
        >
          One stable context, one selected peer view.
        </TabsContent>
        <TabsContent
          className="rounded-xl border p-5 text-sm leading-6"
          value="states"
        >
          Selected, hover, focus-visible, and disabled remain distinct.
        </TabsContent>
        <TabsContent
          className="rounded-xl border p-5 text-sm leading-6"
          value="accessibility"
        >
          Arrow keys move between tab triggers.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const navigationOverlaySpecimens = {
  breadcrumb: BreadcrumbSpecimen,
  "context-menu": ContextMenuSpecimen,
  dialog: DialogSpecimen,
  direction: DirectionSpecimen,
  drawer: DrawerSpecimen,
  "dropdown-menu": DropdownMenuSpecimen,
  "hover-card": HoverCardSpecimen,
  menubar: MenubarSpecimen,
  "navigation-menu": NavigationMenuSpecimen,
  pagination: PaginationSpecimen,
  popover: PopoverSpecimen,
  sheet: SheetSpecimen,
  sidebar: SidebarSpecimen,
  tabs: TabsSpecimen,
} satisfies Record<string, React.ComponentType<SpecimenProps>>;
