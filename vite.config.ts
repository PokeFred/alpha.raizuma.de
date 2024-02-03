import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import type { CommonServerOptions } from 'vite'

const serverConfig: CommonServerOptions = {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    plugins: [sveltekit(), enhancedImages()],
})
