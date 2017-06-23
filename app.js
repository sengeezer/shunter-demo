var shunter = require('shunter');

var app = shunter({
    // Set the theme path to the current directory
    path: {
        themes: __dirname
    },

    // Configure the proxy route, this should point to
    // where your back end application runs
    routes: {
        localhost: {
            default: {
                host: '127.0.0.1',
                port: 5401
            }
        }
    }

});

// Start the application
app.start();
