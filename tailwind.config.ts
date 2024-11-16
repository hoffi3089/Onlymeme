/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      md: '1.05rem',
      lg: '1.25rem',
      xl: '1.4rem',
    },
    extend: {
      fontFamily: {
        sans : ['"Pixelify Sans"' , defaultTheme.fontFamily.sans],
        jua: ['"Jua"' , defaultTheme.fontFamily.sans]
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        background: 'var(--background)',
        lightBackground: 'var(--light-background)',
        darkBackground: 'var(--dark-background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        lightPrimary: 'var(--light-primary)',
        darkPrimary: 'var(--dark-primary)',
        hoverPrimary: 'var(--hover-primary)',
        secondary: 'var(--secondary)',
        darkSecondary: 'var(--dark-secondary)',
        lightSecondary: 'var(--light-secondary)', 
        hoverSecondary: 'var(--hover-secondary)', 
        tertiary: 'var(--tertiary)',
        darkTertiary: 'var(--dark-tertiary)',
        lightTertiary: 'var(--light-tertiary)',
        brightTertiary: 'var(--bright-tertiary)',
        hoverTertiary: 'var(--hover-tertiary)',
        customGray: 'var(--custom-gray)',
        grayBackground: 'var(--gray-background)',
        primaryText: 'var(--text)'
      }
    },
  },
  plugins: [],
}

