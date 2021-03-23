const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "main.js",
    module: {
        rules: [
            // ... other rules omitted

            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // plugin omitted
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Source Sans Pro" },
                { family: "Noto Sans" },
            ]
            /* ...options */
        })
    ]
}