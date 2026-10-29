const { Component } = require('./Component');

module.exports = class When extends Component {
    /**
     *
     * @param {boolean} condition
     * @param {(api: import("@ostro/mix").Api) => void} callback
     */
    register(condition, callback) {
        if (condition) {
            callback(this.context.api);
        }
    }
};
