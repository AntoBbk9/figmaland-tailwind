/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/public/telBG.png')"
    },
    height: {
      '639px': '639px',
      '600px': '600px',

    },
    width: {
      '1000px': '1000px',
    },
  plugins: [],
}
}
}