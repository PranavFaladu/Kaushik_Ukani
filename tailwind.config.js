module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./contact.html",
    "./product.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        accent: '#3b82f6',
        dark: '#1e293b',
        light: '#f8fafc',
        'text-dark': '#1e293b',
        'text-light': '#94a3b8',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
