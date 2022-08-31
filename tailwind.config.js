/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html,js}'],
    darkMode: 'class',
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary1: '#25211E',
                primary2: '#303030',
                secondary: '#7B6C63',
                accent1: '#D6A848',
                accent2: '#D2B980',
                primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
            },
            fontFamily: {
                'outfit': ['Outfit', 'sans-serif']
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
