// tailwind.config.js

export default {
  theme: {
    extend: {
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)', opacity: '1' },
          '20%': { transform: 'translate(-2px, 2px)', opacity: '0.8' },
          '40%': { transform: 'translate(-2px, -2px)', opacity: '1' },
          '60%': { transform: 'translate(2px, 2px)', opacity: '0.9' },
          '80%': { transform: 'translate(2px, -2px)', opacity: '1' },
        },
        sparkle: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
          '100%': { opacity: '0', transform: 'scale(1.5)' },
        },
      },
      animation: {
        glitch: 'glitch 1s infinite',
        sparkle: 'sparkle 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
