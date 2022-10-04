const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#FF7875',
                            '@border-radius-base': '23px',
                            '@border-radius-sm': '23px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};