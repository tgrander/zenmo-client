const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const AntDefaultVars = require('./ant-default-vars.less')


module.exports = function override(config, env) {

    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess(config, env, {
    modifyVars: AntDefaultVars,
    });

  return config;
}
