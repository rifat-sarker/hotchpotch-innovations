import type { Config } from "tailwindcss";

type PluginFunction = (utils: { addUtilities: Function }) => void;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: {addUtilities: Function}) {
      const newUtilities = {
        '.text-gradient': {
          backgroundImage: 'linear-gradient(to right, #2B59FF, #BB2BFF)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        },
        '.text-gradient2': {
          backgroundImage: 'linear-gradient(to right, #FFC947, #FC6739)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        },
      };
      
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
