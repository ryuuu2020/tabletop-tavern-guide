import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#111110',
        'abyss-light': '#0a0a09',
        'abyss-elevated': '#1a1a18',
        'accent-primary': '#e8e7e3',
        'accent-primary-dim': '#c4c3bf',
        'accent-primary-glow': 'rgba(232,231,227,0.06)',
        'accent-secondary': '#a8a59f',
        'text-primary': '#f0efe9',
        'text-secondary': '#b0aea7',
        'text-muted': '#6b6963',
        'border-subtle': '#2a2a27',
        'border-strong': '#3d3d39',
      },
      fontFamily: {
        display: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
