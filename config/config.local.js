var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        database: 'node-joinNow-development',
        username: 'node_joinNow',
        password: 'pass_joinNow',
    },

    test: {
        database: 'node-joinNow-test',
        username: 'node_joinNow',
        password: 'pass_joinNow',
    },

    production: {
        database: 'node-joinNow-test',
        username: 'node_joinNow',
        password: 'pass_joinNow',
    }
};

module.exports = config[env];
