/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      'public/**/*.{html,js,jsx,ts,tsx}', "public/index.html"
   ],
   theme: {
      extend: {
         "title": ["Graduate"],
         "permanent-marker": ["Permanent Marker", "cursive"]
      },
   },
   colors: {
      extend: {
         "maroon": "#800000"
      }
   },
   plugins: [],
}

