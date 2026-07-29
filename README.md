# 🎨 shadcn/ui Design System & Architecture Specification

This repository contains the **Design System & Frontend Architecture Specifications** for building modern web applications using `shadcn/ui`, `Tailwind CSS`, and `Next.js (App Router)`.

---

## 🌐 Multilingual Documentation Index

- **English (Single Source of Truth - SSOT)**: [🎨 DESIGN.md](./DESIGN.md)
- **한국어 (Korean)**: [🇰🇷 DESIGN.ko.md](./DESIGN.ko.md)
- **简体中文 (Simplified Chinese)**: [🇨🇳 DESIGN.cn.md](./DESIGN.cn.md)
- **日本語 (Japanese)**: [🇯🇵 DESIGN.jp.md](./DESIGN.jp.md)

---

## 🛠️ Key Topics Covered

1. **Core Principles**: Code Ownership, Accessibility First, Token-Driven Styling, Micro-Interactions, Composition (`asChild`).
2. **Tech Stack & Architecture**: Next.js App Router, Tailwind CSS, Radix UI Primitives, Lucide Icons, TanStack Query, Zustand, React Hook Form, Zod.
3. **Design Tokens & Theme System**: OKLCH / HSL semantic color tokens (Light & Dark modes), Typography scale, Radius tokens.
4. **shadcn/ui Component Architecture**: `cn()` utility, CVA variants pattern, `asChild` Slot polymorphism, 30+ essential component catalog, WAI-ARIA standards.
5. **Layout & Responsive Strategy**: App Shell layout, Breakpoints matrix (`sm`, `md`, `lg`, `xl`), Framer Motion & Skeleton placeholders.
6. **State Management & Data Flow**: Server/Client component boundary (`"use client"`), React Hook Form + Zod schema validation, Sonner toast notifications.
7. **Development Conventions**: Naming conventions, `React.forwardRef` component pattern, Conventional Commits.
8. **Setup & Quality Checklist**: One-line CLI setup commands, 7-point pre-flight quality audit checklist.
