# Harry Lorent Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Optimized for performance
- 🎭 Smooth animations and interactions
- 🌟 Modern design with glassmorphism effects

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/harry-lorent.git
cd harry-lorent
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
```

### Static Export for GitHub Pages

```bash
npm run build
npm run export
```

## Deployment

This project uses GitHub Pages via GitHub Actions.

- Source: GitHub Actions builds the site and deploys the `out/` artifact
- Workflow: `.github/workflows/deploy.yml` (remove extra duplicates like `nextjs.yml` to avoid conflicts)
- Ensure Pages is enabled: Settings → Pages → Build and deployment → GitHub Actions

No need to keep a `docs/` folder for deployment. The workflow publishes Pages automatically.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages / Vercel

## License

This project is open source and available under the [MIT License](LICENSE).