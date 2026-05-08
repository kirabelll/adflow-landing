/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        '3xl': '64px',
      },
      fontFamily: {
        geist: ['var(--font-geist)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        'instrument-serif': ['var(--font-instrument-serif)', 'serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
        bricolage: ['var(--font-bricolage)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'work-sans': ['var(--font-work-sans)', 'sans-serif'],
        'pt-serif': ['var(--font-pt-serif)', 'serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}