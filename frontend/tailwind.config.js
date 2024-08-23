/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'design': "url('/design.avif')",
        'dev': "url('/dev.jpeg')",
        'nft': "url('/nft.avif')",
        "bg" :"url('/design.avif')" 

      }
    },
  },
  plugins: [],
};
