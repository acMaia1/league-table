module.exports = function(config) {
    config.set({
    
        basePath : './',
    
        files : [
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.js",
            "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-animate.js",
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js",
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js",
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js",
            "https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js",
            { pattern: 'app/**/components/**/*.js'},
            { pattern: 'tests/*.js'}
        ],

        autoWatch : false,
        frameworks: ['jasmine'],
        
        preprocessors: {
            'app/**/components/**/*.js': ['webpack'],
            'tests/*.js': ['webpack']
        },
    
        webpack: {
            module: {
                loaders: [
                  {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                { test: /\.html$/, loader: "html-loader" },             
                { test: /\.css$/, loader: "style!css" }
              ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
    
        browsers: [
            'PhantomJS'
        ],
    
        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-webpack'
        ],
    
        singleRun: true,
    
        junitReporter : {
            outputFile: 'tests/junit-reporter-log.xml',
            suite: 'unit'
        }
    
    });
};