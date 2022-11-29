import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
export default {
    input: 'src/index.js', // Path relative to package.json
    external: ['gsap', 'lodash'],
    output: {
        format: 'cjs',
        name: 'superCursor',
        exports: 'named',
        globals: {
            'gsap': 'gsap',
            'lodash': 'lodash'
        }
    },
    plugins: [
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
    ],
};
