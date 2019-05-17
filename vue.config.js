// vue.config.js

module.exports = {
  filenameHashing: false,
  outputDir: 'dist',
  'devServer': {
    // In CI mode, Safari cannot contact "localhost", so as a workaround, run the dev server using the jenkins agent pod dns instead.
    host: process.env.JENKINS_AGENT_NAME || 'localhost',
    proxy: process.env.NODE_ENV === 'production' ? undefined : {
      '^/api': {
        'target': 'http://localhost:8080'
      }
    }
  }
}
