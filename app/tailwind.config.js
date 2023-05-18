/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {}
  },

  plugins: [require("daisyui")],
  darkMode: ["class", '[data-theme="chessDark"]'],
  daisyui: {
      // based on daisyUI night and winter themes
      themes: [
          {
            
              chessLight: {
                  primary: "#047AFF",                 
                  secondary: "#6370d6",
                  accent: "#C148AC",
                  neutral: "#9ca3af",
                  "base-100": "#FFFFFF",
                  "base-200": "#F2F7FF",
                  "base-300": "#E3E9F4",
                  "base-content": "#394E6A",
                  info: "#93E7FB",
                  success: "#44403c",
                  warning: "#EFD7BB",
                  error: "#E58B8B"
              },
              chessDark: {
                  primary: "#38BDF8",
                  secondary: "#818CF8",
                  accent: "#1d4ed8",
                  neutral: "#292524",
                  "base-100": "#312E2A",
                  info: "#0CA5E9",
                  success: "#ffffff",
                  warning: "#F4BF50",
                  error: "#FB7085"
              },
             
            
          }
      ],
      darkTheme: "chessDark",
      
  }
};

