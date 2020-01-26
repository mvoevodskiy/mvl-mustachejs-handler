const MVLoaderBase = require('mvloader/src/mvloaderbase');
const Mustache = require('mustache');

class MVLMustacheHandler extends MVLoaderBase {

    constructor (...config) {
        let localDefaults = {
            customTags: ['{{', '}}'],
        };
        super(localDefaults, ...config);
    }

    render = (template, params, customTags = undefined) => {
        customTags = customTags || this.config.customTags;
        return  Mustache.render(template, params, customTags);
    }

}

module.exports = MVLMustacheHandler;