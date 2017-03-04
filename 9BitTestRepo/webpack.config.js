    var path = require('path');

    module.exports = {
        entry: {
            dashboard: './src/main/js/dashboard.js',
            transaction: './src/main/js/transaction.js',
            login: './src/main/js/loginpage.js',
            signup: './src/main/js/signup.js'
        },
        output: {
            path: './grails-app/assets/javascripts',
            publicPath: '/assets/',
            filename: '[name].bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, 'src/main/js'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    };
