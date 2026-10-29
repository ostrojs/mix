const mix = require('../src/index');

describe('Ostro Mix Core Plugin', () => {
    test('exports mix singleton and api', () => {
        expect(mix).toBeDefined();
        expect(typeof mix.js).toBe('function');
        expect(typeof mix.postCss).toBe('function');
        expect(typeof mix.version).toBe('function');
    });

    test('sees ostro environment', () => {
        expect(mix.sees('ostro')).toBe(false);
    });

    test('config has default options', () => {
        expect(mix.config).toBeDefined();
        expect(mix.config.manifest).toBe('mix-manifest.json');
    });
});
