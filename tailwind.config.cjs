const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ["Urbanist", ...defaultTheme.fontFamily.sans],
				'mono': ["Space Mono", ...defaultTheme.fontFamily.mono],
				'altsans': ["Orbitron", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
