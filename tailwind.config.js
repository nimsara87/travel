module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077BE", // blue-600 - Trust and endless sky possibilities
          50: "#EBF8FF", // blue-50
          100: "#BEE3F8", // blue-100
          200: "#90CDF4", // blue-200
          300: "#63B3ED", // blue-300
          400: "#4299E1", // blue-400
          500: "#3182CE", // blue-500
          600: "#0077BE", // blue-600
          700: "#2C5282", // blue-700
          800: "#2A4365", // blue-800
          900: "#1A365D", // blue-900
        },
        secondary: {
          DEFAULT: "#FF6B35", // orange-500 - Adventure energy and warm sunset moments
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#FF6B35", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        accent: {
          DEFAULT: "#FFD23F", // yellow-400 - Discovery highlights and golden hour magic
          50: "#FEFCE8", // yellow-50
          100: "#FEF3C7", // yellow-100
          200: "#FDE68A", // yellow-200
          300: "#FCD34D", // yellow-300
          400: "#FFD23F", // yellow-400
          500: "#EAB308", // yellow-500
          600: "#CA8A04", // yellow-600
          700: "#A16207", // yellow-700
          800: "#854D0E", // yellow-800
          900: "#713F12", // yellow-900
        },
        background: "#FEFEFE", // gray-50 - Clean canvas for authentic photography
        surface: "#F8F9FA", // gray-100 - Subtle content separation without harsh lines
        text: {
          primary: "#1A1A1A", // gray-900 - Extended reading comfort and authority
          secondary: "#6B7280", // gray-500 - Clear hierarchy without stark contrast
        },
        success: "#10B981", // emerald-500 - Booking confidence and positive confirmation
        warning: "#F59E0B", // amber-500 - Helpful urgency for limited availability
        error: "#EF4444", // red-500 - Gentle correction without panic
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Headlines and CTAs
        'source-sans': ['Source Sans Pro', 'sans-serif'], // Body text
        'crimson': ['Crimson Text', 'serif'], // Accents and quotes
        sans: ['Source Sans Pro', 'sans-serif'], // Default sans
        serif: ['Crimson Text', 'serif'], // Default serif
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}