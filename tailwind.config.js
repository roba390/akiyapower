import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
  colors: {
   primary: {
  DEFAULT: 'var(--aw-color-primary)',
  light: 'var(--aw-color-primary)',
  dark: 'var(--aw-color-primary)',
},
secondary: {
  DEFAULT: 'var(--aw-color-secondary)',
  light: 'var(--aw-color-secondary)',
  dark: 'var(--aw-color-secondary)',
},
accent: {
  DEFAULT: 'var(--aw-color-accent)',
  light: 'var(--aw-color-accent)',
  dark: 'var(--aw-color-accent)',
},
  },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },

  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],

  darkMode: 'class',
};
