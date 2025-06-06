/** @type {import('tailwindcss').Config} */
export default {
	content: ['./source/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
            'sans': ['Manrope, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
			'self': ['ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
			'mono': ['ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace']
        },
		extend: {
			// gridTemplateColumns: {
			// 	// Simple 16 column grid
			// 	"16": "repeat(16, minmax(0, 1fr))",
			//   },
			//   gridColumnStart: {
			// 	"13": "13",
			// 	"14": "14",
			// 	"15": "15",
			// 	"16": "16",
			// 	"17": "17",
			//   },
			//   gridColumnEnd: {
			// 	"13": "13",
			// 	"14": "14",
			// 	"15": "15",
			// 	"16": "16",
			// 	"17": "17",
			//   },
		},
	},
	plugins: [],
}
