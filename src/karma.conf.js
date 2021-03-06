// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-spec-reporter'),
            require('karma-junit-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../reports/coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        reporters: ['spec', 'kjhtml', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeDebug'],
        singleRun: false,
        customLaunchers: {
            ChromeHeadless:  {
                base:   'Chrome',
                flags:  [
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222',
                ],
            },
            ChromeDebug: {
                base:   'Chrome',
                flags:  [
                    '--remote-debugging-port=9222',
                ],
            }
        },
        junitReporter: {
            outputDir: require('path').join(__dirname, '../reports'),
            outputFile: 'test-results.xml',
            suite: '',
            useBrowserName: false
        }
    });
};
