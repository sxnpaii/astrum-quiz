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
        'back-img': "url(/Images/Group\ 29.png), url(/Images/Group\ 59.png), url(/Images/Ellipse\ 4.png), url(/Images/Mask\ Group.png)"
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
      }
    },
  },
  plugins: [],
}
