/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.js'],
    theme: {
        extend: {},
        colors: {
            orange: 'hsl(26, 100%, 55%)',
            'pale-orange': 'hsl(25, 100%, 94%)',
        },
        fontFamily: {
            'main-font': ['Kumbh Sans', 'sans-serif'],
        },
    },
    plugins: [],
};
