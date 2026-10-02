/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.hbs"],
  theme: {
    
    extend: {
      fontFamily: 
      {
        inter: ['"Inter"', '"Open Sans"', 'sans-serif'],
        sans: ["'Roboto'", "sans-serif"],
      },
    },
    colors: 
      {
        "cloud-dancer": "#F0EEE9",
        'txt-main': '#2e2724',
        'fill-dark': '#A47764',
        'txt-dark': '#2e2724',


        "mocka-mouse": "#A47764",
        'warm-beige':"#E8DCC8",  
        
        //"lavender": "#101585",
        //"lavender-light": "#331400",
        
        
        
        //"txt-light": "#a96d3e",
        //"citrus": "#FFDD44",
      },
  },
  plugins: [],
}