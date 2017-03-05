const reeflightSetup = require('./../dist/index-node.js');
const setup =reeflightSetup();

if (setup === null ) {
  return 0;
}