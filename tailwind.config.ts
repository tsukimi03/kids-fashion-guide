import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e17e96',
          hover: '#c96d82',
        },
        secondary: {
          DEFAULT: '#6b7280',
          hover: '#4b5563',
        },
        accent: '#F0BAB8',
      },
      maxWidth: {
        container: '1040px',
      },
      borderRadius: {
        card: '16px',
        button: '8px',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans JP',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
