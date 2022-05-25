module.exports = {
  content: ["./src/**/*.{html,js}","*","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        casc: ['Cascadia code', 'Consolas', 'monospace']
      },
      transitionTimingFunction: {
        'rubber' : 'cubic-bezier(.19, 0, 0, 1.64)'
      }
    },
  },
  plugins: [],
}
