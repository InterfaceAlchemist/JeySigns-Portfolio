/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        brand: '#ff5900', // orange
        ink: '#1e1e1e', // dark sections
        line: '#3e3e3e', // dark card borders
        link: '#0077ff', // blue "Download CV"
        live: '#00ff04', // availability dot
      },
      fontFamily: {
        sans: ['"Intel One Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        mono: ['"Intel One Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        script: ['Caveat', 'cursive'],
        zetta: ['"Lexend Zetta"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'flash-word': {
          '0%': { clipPath: 'inset(0 100% 0 0)', transform: 'scale(0.94)', opacity: '0' },
          '60%': { opacity: '1' },
          '100%': { clipPath: 'inset(0 0 0 0)', transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'flash-word': 'flash-word 1.1s cubic-bezier(0.77, 0, 0.175, 1) 0.15s both',
      },
    },
  },
  plugins: [],
}
