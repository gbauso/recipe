const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;

// function getConfigurationByFile(file) {
//   const pathToConfigFile = path.resolve('./cypress/plugins/config', `${file}.json`)
//   console.log(pathToConfigFile)
//   return fs.readJson(pathToConfigFile)
// }

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  const file = config.env.ENVIRONMENT || 'local';
  const environment = require(`./config/${file}`);
  console.log(environment);
  return {
    ...config,
    ...environment,
  };
};
