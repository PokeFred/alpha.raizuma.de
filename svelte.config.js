import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess({
        out: './build',
        precompress: true,
        envPrefix: '',
    }),
    kit: {
        adapter: adapter({ precompress: true}),
        alias: {
            $server: './src/lib/server',
            $components: './src/lib/components',
            $utils: './src/lib/utils',
        },
    },
}

export default config
