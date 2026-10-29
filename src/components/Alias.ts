const { Component } = require('./Component');

module.exports = class Alias extends Component {
    [key: string]: any;
    /** @type {Record<string, string | {raw: string}>} */
    aliases = {};

    /**
     * Add resolution aliases to webpack's config
     *
     * @param {Record<string, string | {raw: string}>} paths
     */
    register(paths) {
        this.aliases = { ...this.aliases, ...paths };
    }

    /**
     * @param {import('webpack').Configuration} config
     **/
    webpackConfig(config) {
        config.resolve = config.resolve || {};
        config.resolve.alias = config.resolve.alias || {};

        for (const [alias, path] of Object.entries(this.aliases)) {
            const resolvedPath =
                typeof path === 'object' && path !== null ? (path as any).raw : this.context.paths.root(path);

            config.resolve.alias[alias] = resolvedPath;
        }

        return config;
    }
};

export {};
