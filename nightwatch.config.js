var packageJson = require('./package.json')
 
// Shared config for CI env
const ciSettings = {
    launch_url: 'http://ondemand.saucelabs.com:80',
    selenium_port: 80,
    selenium_host: 'ondemand.saucelabs.com',
    silent: true,
    username: process.env.SAUCE_CRED_USR,
    access_key: process.env.SAUCE_CRED_PSW,
    desiredCapabilities: {
      name: packageJson.name,
      build: packageJson.name + '#PR-' + process.env.CHANGE_ID + '-build-' + process.env.BUILD_NUMBER,
      'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
    }
  }

  // Specific config for different browsers/OS combinations for CI env
let ci_chrome = ciSettings
ci_chrome.desiredCapabilities.browserName = 'chrome'

let ci_firefox = ciSettings
ci_firefox.desiredCapabilities.browserName = 'firefox'

let ci_ie11 = ciSettings
ci_ie11.desiredCapabilities.browserName = 'internet explorer'
ci_ie11.desiredCapabilities.platform = 'Windows 10'
ci_ie11.desiredCapabilities.version = '11.103'

let ci_safari = ciSettings
ci_safari.desiredCapabilities.browserName = 'safari'

module.exports = {

  test_settings: {
    ci_chrome,
    ci_firefox,
    ci_ie11,
    ci_safari,
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      },
      selenium: {
        cli_args: {
          'webdriver.firefox.driver': require('geckodriver').path
        }
      }
    },
    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
