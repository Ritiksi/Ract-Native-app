export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4f46e5',
          dark: '#3730a3',
          soft: '#eef2ff'
        },
        surface: '#0f172a'
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
}
