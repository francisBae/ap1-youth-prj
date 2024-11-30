import react from '@vitejs/plugin-react';
import { resolve } from 'path'; //file path resolve module
import { defineConfig } from 'vite';
// import { wrapperEnv } from './src/utils/getEnv';

//defineConfig used to define Vite configuration object
export default defineConfig({
	resolve: {
		alias: [
			{ find: '@components', replacement: '/src/components' },
			{ find: '@', replacement: '/src' }
		]
	},
	plugins: [react()],

	build: {
		outDir: 'dist',
		minify: 'esbuild',
		rollupOptions: {
			// entry points
			input: {
				main: resolve(__dirname, './index.html')
			},
			output: {
				// Static resource classification and packaging
				chunkFileNames: 'assets/js/[name].[hash:8].js',
				entryFileNames: 'assets/js/[name].[hash:8].js',
				assetFileNames: 'assets/[ext]/[name].[hash:8].[ext]'
			}
		},
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
});
