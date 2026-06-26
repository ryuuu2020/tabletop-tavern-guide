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
        abyss: '#ffffff',
        'abyss-light': '#f5f5f5',
        'abyss-elevated': '#fafafa',
        'accent-primary': '#000000',
        'accent-primary-dim': '#333333',
        'accent-primary-glow': 'rgba(0,0,0,0.05)',
        'accent-secondary': '#666666',
        'text-primary': '#000000',
        'text-secondary': '#444444',
        'text-muted': '#888888',
        'border-subtle': '#e5e5e5',
        'border-strong': '#cccccc',
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
