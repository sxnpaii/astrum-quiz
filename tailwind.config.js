/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    // TODO -> must be edited
    extend: {
      backgroundImage: {
        'back-img': "url(/src/Images/Ellipse\ 4.png), url(/src/Images/Group\ 29.png), url(/src/Images/Group\ 59.png), url(/src/Images/Mask\ Group.png)"
      },

      width: {
        '128': '26rem',
      },

      colors: {
        'white': '#FFF',
      },
      backgroundColor: {
        'background': 'rgba(6, 13, 45, 0.90)',
      },

      content: {
        'myContent': '1 '
      },

      fontFamily: {
        'font_Verdana': 'Verdana, Geneva, Tahoma, sans-serif',
      }
    },
  },
  plugins: [],
}
