/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      'limit': '1440px',
    },
    screens: {
      'xxxs': "320px",
      'xxs': "375px",
      'xs': "425px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      'limit': "1440px",
      'max-limit': { max: '1440px' },
      "max-xl": { max: "1280px" },
      "max-lg": { max: "1024px" },
      "max-md": { max: "768px" },
      "max-sm": { max: "640px" },
      "max-xs": { max: "425px" },
      "max-xxs": { max: "375px" },
      "max-xxxs": { max: "320px" },
    },
    colors: {
      'link': '#0000EE',
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': colors.black,
      'white': colors.white,
      'gray': colors.gray,
      'slate': colors.slate,
      'emerald': colors.emerald,
      'indigo': colors.indigo,
      'yellow': colors.yellow,
      'red': colors.red,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'lower-roman',
    },
    extend: {
      borderRadius: {
        custom: '10px'
      },
      fontSize: {
        'display-1': [
          '48px',
          {
            fontWeight: '300',
            lineHeight: '66px'
          }
        ],
        'heading-1': [
          '48px',
          {
            fontWeight: '700',
            lineHeight: '66px'
          }
        ],
        'heading-2': [
          '40px',
          {
            fontWeight: '700',
            lineHeight: '54px'
          }
        ],
        'heading-3': [
          '36px',
          {
            fontWeight: '700',
            lineHeight: '50px'
          }
        ],
        'heading-4': [
          '28px',
          {
            fontWeight: '700',
            lineHeight: '38px'
          }
        ],
        'heading-5': [
          '24px',
          {
            fontWeight: '700',
            lineHeight: '32px'
          }
        ],
        'heading-6': [
          '20px',
          {
            fontWeight: '700',
            lineHeight: '28px'
          }
        ],
        'heading-7': [
          '18px',
          {
            fontWeight: '700',
            lineHeight: '24px'
          }
        ],
        'heading-8': [
          '16px',
          {
            fontWeight: '700',
            lineHeight: '27px'
          }
        ],
        'body-lg': [
          '20px',
          {
            fontWeight: '400',
            lineHeight: '26px'
          }
        ],
        'body-md': [
          '18px',
          {
            fontWeight: '400',
            lineHeight: '22px'
          }
        ],
        'body-sm': [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '22px'
          }
        ],
        'body-tiny': [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '25px'
          }
        ],
        'input-md': [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '18px'
          }
        ],
        'input-sm': [
          '12px',
          {
            fontWeight: '400',
            lineHeight: '16px'
          }
        ],
        error: [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '20px'
          }
        ],
        'label-info': [
          '14px',
          {
            fontWeight: '400',
            lineHeight: '20px'
          }
        ],
        'label-md': [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '20px'
          }
        ],
        'label-small': [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '16px'
          }
        ],
        'label-sm': [
          '12px',
          {
            fontWeight: '600',
            lineHeight: '16px'
          }
        ],
        'info-md': [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '20px'
          }
        ],
        info: [
          '14px',
          {
            fontWeight: '600',
            lineHeight: '20px'
          }
        ],
        'btn-txt-lg': [
          '20px',
          {
            fontWeight: '600',
            lineHeight: '28px'
          }
        ],
        'btn-txt-md': [
          '18px',
          {
            fontWeight: '600',
            lineHeight: '26px'
          }
        ],
        'btn-txt-sm': [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '22px'
          }
        ]
      },
      colors: {
        'color-header/input-text': '#1B1B1B',
        'color-title-text': '#535558',
        'color-body-text': '#242424',
        'color-label-text': '#787878',
        'color-error-text': '#CD241A',
        'color-success-s50': '#00A15B',
        'color-button-text': '#ffffff',
        'color-secondary-s05': '#0C0C0C',
        'color-secondary-s15': '#242424',
        'color-secondary-s30': '#484848',
        'color-secondary-s50': '#787878',
        'color-secondary-s60': '#939393',
        'color-secondary-s70': '#AEAEAE',
        'color-secondary-s80': '#C9C9C9',
        'color-secondary-s90': '#E4E4E4',
        'color-secondary-s95': '#F4F4F4',
        'color-primary-p40': '#2755CE',
        'color-primary-p50': '#316AFF',
        'color-primary-p60': '#5A88FF',
        'color-primary-p70': '#83A6FF',
        'color-primary-p90': '#EAF0FF',
        'color-primary-p95': '#F7F9FF',
        'color-error-e90': '#EFD1CF',
        'color-light-mint': '#E7FFF4',
        'color-basement': '#FFF9E5',
        'color-primary-p85': 'rgba(193, 210, 255, 1)',
        'color-header/input': '#1B1B1B',
        'color-card-body': '#ffffff',
        'color-info': '#AEAEAE',
        'color-info-1': '#B2B2B2',
        'color-main': '#1A1A1A',
        'color-input-border': '#E5E5E5',
        'color-bg-light': '#FBFBFB'
      },
      boxShadow: {
        'login-card': '4px 8px 24px #F2F2F5',
        'nav-links': '0px 40px 60px 1px rgba(139, 139, 139, 0.1);',
        'prop-details-card': '6px 6px 20px rgba(122,122,122,0.25)',
        'building-controls': '0px 3px 4px rgba(139, 139, 139, 0.1)',
        'landlords-options': '3px 3px 10px 0px rgba(155, 155, 155, 0.25)'
      },
      backgroundImage: {
        'bg-landlord': 'url(\'/assets/bg_landlord.svg\')',
      }

    },
  },
  plugins: [],
}
