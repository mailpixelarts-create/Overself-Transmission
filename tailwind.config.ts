import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ["var(--font-playfair)", "Georgia", "serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            colors: {
                background: "#0a0a0a",
                surface: "#111111",
                border: "#1e1e1e",
                muted: "#888888",
                foreground: "#e8e3db",
                accent: "#c9b99a",
            },
            maxWidth: {
                "5xl": "64rem",
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "-1000px 0" },
                    "100%": { backgroundPosition: "1000px 0" },
                },
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                shimmer: "shimmer 2s infinite linear",
                "fade-up": "fade-up 0.6s ease forwards",
            },
        },
    },
    plugins: [],
};

export default config;
