# VIARA Frontend Boilerplate

A modern, production-ready frontend boilerplate built using React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. The project is structured to integrate with InsForge as its sole backend/database provider.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite 6](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Folder Structure

```text
src/
├── assets/          # Static files (images, icons, etc.)
├── components/      # Shared/reusable UI components
│   └── ui/          # Core shadcn/ui primitives
├── hooks/           # Reusable custom React hooks
├── layouts/         # Page layout wrappers (e.g. AuthLayout, DashboardLayout)
├── pages/           # High-level route pages
├── services/        # InsForge & external API communication layer
├── types/           # Shared TypeScript interfaces & definitions
├── utils/           # Helper/utility scripts & libraries
├── App.tsx          # Router layout composition and config
├── index.css        # Tailwind setup and theme variables
└── main.tsx         # App entrypoint
```

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or newer recommended)
- [npm](https://www.npmjs.com/) (v9.x or newer recommended)

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Environment Variables

Configure your local environment variables. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Define the variables in your `.env`:

```env
VITE_INSFORGE_URL=https://api.insforge.com
VITE_INSFORGE_API_KEY=your-api-key-here
```

### Development Commands

- Run development server: `npm run dev`
- Build production bundles: `npm run build`
- Run linting: `npm run lint`
- Auto-format code: `npm run format`

## InsForge Integration Layer

All logic communicating with InsForge must be placed in `src/services/`. Do not perform API calls or import third-party SDK clients directly within components. This separation keeps the UI components stateless, pure, and decoupled.
