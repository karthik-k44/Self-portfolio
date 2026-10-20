import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        aurora: 'linear-gradient(100deg, #22cdf2 0%, #6366f1 55%, #a78bfa 100%)',
        'aurora-vertical': 'linear-gradient(180deg, #22cdf2 0%, #6366f1 55%, #a78bfa 100%)',
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e2',
          300: '#aeb6c6',
          400: '#828dad',
          500: '#636f8f',
          600: '#4e5775',
          700: '#40475e',
          800: '#373d50',
          900: '#0b0e14',
          950: '#06080c',
        },
        accent: {
          50: '#ecfeff',
          100: '#cff6fe',
          200: '#a3eefd',
          300: '#67e1fa',
          400: '#22cdf2',
          500: '#06aed4',
          600: '#088bb2',
          700: '#0e7090',
          800: '#155b75',
          900: '#164c63',
          // shadcn/ui token — hover surfaces on ghost/outline buttons
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        // shadcn/ui tokens — values live in src/frontend/styles/index.css
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // hero letters rising out of their mask
        rise: {
          to: { transform: 'translateY(0)' },
        },
        // aurora gradient sliding across text
        sweep: {
          to: { backgroundPosition: '100% 0' },
        },
        drift: {
          '50%': { transform: 'translate(60px, 40px) scale(1.1)' },
          '100%': { transform: 'translate(-40px, 70px) scale(0.95)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        // slot-machine swap through three stacked words (+ the first repeated)
        slot: {
          '0%, 28%': { transform: 'translateY(0)' },
          '33%, 61%': { transform: 'translateY(-1.2em)' },
          '66%, 95%': { transform: 'translateY(-2.4em)' },
          '100%': { transform: 'translateY(-3.6em)' },
        },
        wheel: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(14px)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        lift: {
          to: { transform: 'translateY(-100%)' },
        },
        type: {
          to: { width: '11ch' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        sweep: 'sweep 6s ease-in-out infinite alternate',
        drift: 'drift 18s ease-in-out infinite alternate',
        blink: 'blink 1s steps(1) infinite',
        slot: 'slot 7.5s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        wheel: 'wheel 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        lift: 'lift 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.5s forwards',
        type: 'type 1s steps(11) 0.2s forwards',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.9s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [animate],
};
