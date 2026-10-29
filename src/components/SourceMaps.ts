const { Component } = require('./Component');

module.exports = class SourceMaps extends Component {
    [key: string]: any;
    register(
        generateForProduction = true,
        devType = 'eval-source-map',
        productionType = 'source-map'
    ) {
        let type: string | false = devType;

        if (this.context.api.inProduction()) {
            type = generateForProduction ? productionType : false;
        }

        this.context.config.sourcemaps = type;
    }
};

export {};
