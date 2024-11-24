/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      container: {
        center: true, // Center the container by default
        padding: '0', // Add custom padding
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px', // You can also adjust the max widths for larger breakpoints
      },

      colors: {
        absulate_white: '#fff',
        absulate_black: '#000',
        primary_green: {
          '60': '#CAFF33',
          '65': '#D1FF4D',
          '70': '#D8FF66',
          '80': '3E5FF99',
          '90': '#F2FFCC',
          '95': '#F8FFE5',
          '97': '#FBFFF0',
          '99': '#FEFFFA'
        },
        primary_light_white: {
          '90': '#E4E4E7',
          '95': '#F1F1F3',
          '97': '#F7F7F8',
          '99': '#FCFCFD'
        },
        primary_dark_gray: {
          '10': '#1A1A1A',
          '11': '#1C1C1C',
          '15': '#262626',
          '20': '#333333',
          '30': '#4C4C4D',
          '35': '#59595A',
          '40': '#656567',
          '60': '#98989A',
          '70': '#B3B3B3',
          '75': '#BFBFBF'
        }
      }
    },
  },
  plugins: [],
}