var rp = require('request-promise');
const config = require('./config.json');

const defaults = {
    uri: config.endpoint,
    headers: {
        "api-secret-key":config.apiKey,
        "api-version":config.apiVersion
    },
    json: true // Automatically parses the JSON string in the response
};

exports.signIn = (tenantName, username, password) => {
    let options = defaults;
    options.uri += "/sessions";
    options.method = "POST";

    options.body = {
        "tenantName":tenantName,
        "username":username,
        "password":password
    };

    return rp(options).then(data => {
        return this.generateApiKey();
    });
};

exports.generateApiKey = (sID, rID) => {
    let options = defaults;
    options.uri += "/apikeys";
    options.method = "POST";

    return rp(options).then(saveApiKey);
};

var saveApiKey = (apiKey) => {
    console.log(apiKey);
};

exports.listComputers = () => {
    let options = { ... defaults};
    options.uri += "/computers";

    return rp(options);
};

exports.getComputers = (id) => {
    let options = { ... defaults};
    options.uri += `/computers/${id}?expand=none`;

    return rp(options);
};