const axios = require("axios");
const uuid = require("uuid/v4");
const config = require('./config.json');

const defaults = {
    url: config.endpoint,
    headers: {
        "api-version":config.apiVersion,
        "Content-Type":"application/json"
    },
};

exports.signIn = (tenantName, username, password) => {
    let options = { ... defaults};
    options.url += "/sessions";
    options.method = "post";

    options.data = {
        tenantName:tenantName,
        userName:username,
        password:password
    };

    options.withCredentials = true;

    return axios(options)
    .then((response) => {
        return {RID: response.data.RID,SID: response.headers["set-cookie"][0]};
    })
    .then(credentials => {
        return this.generateApiKey(credentials);
    })
    .catch(console.log);
};

exports.generateApiKey = (credentials) => {
    let options = { ... defaults};
    options.method = "post";
    options.withCredentials = true;

    options.headers.Cookie = credentials.SID;
    options.headers.RID = credentials.RID;

    options.data = {
        keyName: `APOLLO API KEY-${uuid()}`,
        description: "Auto Generated API Key for Apollo",
        locale: "en-US",
        timeZone: "GMT",
        active: true,
        roleID: 2
    };
    
    return axios(config.endpoint + "/apikeys",options)
    .then((response) => {
        return response.data;
    })
    .then(saveApiKey)
    .catch(console.log);
};

var saveApiKey = (apiKey) => {
    console.log(apiKey);
};

exports.listComputers = () => {
    let options = { ... defaults};
    options.url += "/computers";
    options.headers["api-secret-key"] = config.apiKey;

    return axios(options)
    .then((response) => {
        return response.data;
    })
    .catch(response => {
        console.log(response.data);
    });
};

exports.getComputer = (id) => {
    let options = { ... defaults};
    options.url += `/computers/${id}?expand=none`;
    options.headers["api-secret-key"] = config.apiKey;

    return axios(options)
    .then((response) => {
        return response.data;
    })
    .catch(response => {
        console.log(response.data);
    });
};

// this.getComputer(1).then(console.log).catch(console.log)

this.signIn(config.tenantName, config.username, config.password);