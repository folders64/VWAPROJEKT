/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Use the class strategy to toggle dark/light mode
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: []
}