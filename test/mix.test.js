const mix = require('../dist/index');
const Mix = require('../dist/Mix');

describe('Ostro Mix Core Plugin', () => {
    test('exports mix api', () => {
        expect(mix).toBeDefined();
        expect(typeof mix.js).toBe('function');
        expect(typeof mix.postCss).toBe('function');
        expect(typeof mix.version).toBe('function');
        expect(typeof mix.options).toBe('function');
        expect(typeof mix.inProduction).toBe('function');
    });

    test('Mix.primary instance methods', () => {
        const instance = Mix.primary;
        expect(instance).toBeDefined();
        expect(instance.sees('ostro')).toBe(false);
        expect(instance.config).toBeDefined();
        expect(instance.config.manifest).toBe('mix-manifest.json');
        expect(instance.isWatching()).toBe(false);
        expect(typeof instance.inProduction()).toBe('boolean');
    });

    test('sees detects ostro assistant file when present', () => {
        const instance = Mix.primary;
        const File = require('../dist/File');
        const origExists = File.exists;
        try {
            File.exists = (p) => p === './assistant';
            expect(instance.sees('ostro')).toBe(true);
        } finally {
            File.exists = origExists;
        }
    });
});
