/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.html",
        "./src/**/*.{vue,js,jsx,ts,tsx}",
        './src/**/*.{html,js}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'ptmono': ['PT Mono', 'sans-serif'],
                // 'ptserif': ['PT Serif-Regular', 'serif'],
                // 'ptsans': ['PT Sans-Regular', 'sans-serif'],
                // 'body': ['PT Mono-Regular', 'sans-serif'],
            }
        },
    },
    plugins: [
        require("daisyui")
    ],
}


// if not watching and outputtig dist css run
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
// in terminal