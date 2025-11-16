/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            primary: '#1E40AF',   // your custom blue
            secondary: '#9333EA', // example secondary color
        }
      },
    },
    plugins: [],
  }
  