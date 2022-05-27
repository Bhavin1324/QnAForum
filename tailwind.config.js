module.exports = {
  content: ["./src/**/*.{html,js}","*","./Pages/**/*.{html,js}"],
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
