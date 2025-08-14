import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Theme brand colors
      primary: {
  DEFAULT: 'var(--aw-color-primary, #facc15)', // yellow
  light: '#fde68a',
  dark: '#ca8a04',
},
secondary: {
  DEFAULT: 'var(--aw-color-secondary, #10b981)', // green
  light: '#34d399',
  dark: '#047857',
},
accent: {
  DEFAULT: 'var(--aw-color-accent, #2563eb)', // blue
  light: '#3b82f6',
  dark: '#1e40af',
},


        // Readable text system
        default: {
          DEFAULT: 'var(--aw-color-text-default, #111827)', // gray-900
          dark: '#f3f4f6', // gray-100
        },
        muted: {
          DEFAULT: 'var(--aw-color-text-muted, #6b7280)', // gray-500
          dark: '#9ca3af', // gray-400
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
