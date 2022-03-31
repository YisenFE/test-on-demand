import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
    // browser-friendly UMD build
    {
        input: 'src/index.ts',
        output: {
            name: pkg.name,
            file: 'dist/pkg.umd.js',
            format: 'umd',
            intro: 'window.FORMAT = "umd";'
        },
        plugins: [
            resolve(), // so Rollup can find `ms`
            commonjs(), // so Rollup can convert `ms` to an ES module
            rollupTypescript()
        ]
    },

    // Commonjs (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array 
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` adn `format` for each target)
    {
        input: 'src/index.ts',
        output: [
            { file: pkg.main, format: 'cjs', intro: 'window.FORMAT = "cjs";' },
            { file: pkg.module, format: 'es', intro: 'window.FORMAT = "es";' }
        ],
        plugins: [
            rollupTypescript()
        ]
    }
]