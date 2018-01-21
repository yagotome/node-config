if (!process.env.NODE_ENV)
    throw Error('No environment variable NODE_ENV set')
const fs = require('fs');
let defaultConfigPath = `${process.cwd()}/config/default.json`;
let configPath = `${process.cwd()}/config/${process.env.NODE_ENV}.json`;
let defaultConfig = null;
let config = null;
if (fs.existsSync(defaultConfigPath))
    defaultConfig = require(defaultConfigPath);
if (fs.existsSync(configPath))
    config = require(configPath);
if (defaultConfig === null && config === null)
    throw Error(`Neither default.json, nor ${process.env.NODE_ENV}.json found in '${process.cwd()}/config'`)
if (config === null)
    config = defaultConfig;
else if (defaultConfig !== null)
    for (let key in defaultConfig)
        if (!config.hasOwnProperty(key))
            config[key] = defaultConfig[key];
module.exports = config;