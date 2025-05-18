export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sanf-serif'],
        general: ['general', 'sanf-serif'],
        'circular-web': ['circular-web', 'sanf-serif'],
        'robert-medium': ['robert-medium', 'sanf-serif'],
        'robert-reguler': ['robert-regular', 'sanf-serif'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: 'DFDFF2',
          100: 'FOF2FA',
          200: '#010101',
          300: '#4FB7DD'
        },
        violet: {
          300: '#5724FF',
        },
        yellow: {
          100: '#8E983F',
          300: 'EDFF66'
        }
      }
    },
  },
  plugins: [],
};
