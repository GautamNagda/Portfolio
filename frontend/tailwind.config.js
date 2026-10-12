/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        card: {
          DEFAULT: "rgba(18, 18, 26, 0.65)",
          hover: "rgba(24, 24, 36, 0.8)",
          solid: "#12121a",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(79, 209, 255, 0.3)",
        },
        cyan: {
          accent: "#4fd1ff",
          muted: "rgba(79, 209, 255, 0.12)",
          hover: "#38bdf8",
        },
        text: {
          primary: "#f5f6f8",
          secondary: "#94a3b8",
          muted: "#64748b",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(79, 209, 255, 0.25)',
        'glow-cyan-lg': '0 0 50px -10px rgba(79, 209, 255, 0.35)',
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
