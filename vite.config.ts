import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import {
	extractorSvelte,
	presetAttributify,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import unocss from 'unocss/vite';

export default defineConfig({
	plugins: [
		unocss({
			presets: [
				presetUno({
					attributifyPseudo: true
				}),
				presetTypography(),
				presetAttributify()
			],
			transformers: [transformerDirectives(), transformerVariantGroup()],
			extractors: [extractorSvelte]
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
