let config_data = module.exports = function () {// if the static data was already set. return it
    if (config_data != null && config_data != undefined) {
        return config_data
    }

    config_data = {}//LOAD JSON

    if (process.env.NODE_ENV === undefined || process.env.NODE_ENV == null || process.env.NODE_ENV == 'development') {
        config_data = require('./config/config.development.json')
    } else {
        if (process.env.NODE_ENV == 'production') {
            config_data = require('./config/config.production.json')
        }
    }//LOAD FROM ENV VARIABLES
    config_data.connection_string = process.env.connection_string
    config_data.port = process.env.port || config_data.port

    return config_data;

}