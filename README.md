# GIS Web Application

This is a GIS (Geographic Information System) web application built using React, TypeScript, and Vite, with Shadcn UI components for a modern and responsive user interface.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Features
- Interactive map with geolocation
- Filter and search geographic data
- Responsive and accessible UI built with Shadcn UI
- Layer controls and overlays for different map views

## Technologies

- React - JavaScript library for building user interfaces
- TypeScript - Superset of JavaScript for static typing
- Vite - Fast and lightweight development server and build tool
- Shadcn UI - Component library for a consistent and elegant UI

## Installation

Ensure you have **Node.js** and **npm** (or **pnpm**) installed. Then, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/gis-web.git
cd gis-web
pnpm install
```

## Usage

To start the development server:

```bash
pnpm dev
```

The app will be automatic open at http://localhost:3000.

To build the application for production:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

## Project Structure

```plaintext
gis-web/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and static resources
│   ├── components/       # Reusable UI components
│   │   ├── molecules/    # Compound components (small UI building blocks)
│   │   ├── organisms/    # Larger components
|   |   ├── pages/        # Main component
│   │   └── ui/           # Shadcn UI-related components
|   |       └── custom/   # Custom atomic component
│   ├── lib/              # Utility functions
│   ├── router/           # Application routing setup
│   ├── styles/           # Global and component-specific styles
│   ├── types/            # TypeScript type definitions
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment type definitions
├── .env                  # Environment variables
├── .gitignore            # Files and directories to ignore in Git
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Project metadata and scripts
├── postcss.config.js     # PostCSS configuration
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TypeScript configuration
├── tsconfig.node.json    # Node.js-specific TypeScript configuration
└── vite.config.ts        # Vite configuration
```