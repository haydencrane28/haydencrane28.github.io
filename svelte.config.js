import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			base: '',  // Replace 'repo-name' with the name of your repo
		  },
		adapter: adapter({
			// options
			fallback: null // optional, if you want to handle 404s or dynamic routes
		  }),
	}
};

export default config;
