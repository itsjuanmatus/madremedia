module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors: {
         pink: {
           DEFAULT: '#F5D1B9'
         }
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }