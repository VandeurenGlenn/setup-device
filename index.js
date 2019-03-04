'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var fs = require('fs');
var util = require('util');
var os = require('os');
var uuid = _interopDefault(require('uuid/v4'));

const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

var index = async (path$1 = 'org.leofcoin.homecontrol.json', config = {}) => {
  path$1 = path.join(os.homedir(), path$1);

  const init = async () => {
    const _config = {
      model: 'prototype-a',
      serial: Date.now(),
      uid : uuid()
    };

    config = JSON.stringify({ ..._config, ...config }, null, 2);
    await write(path$1, config);
    return 0;
  };

  try {
    await read(path$1);
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await init();
        return 0;
      } catch (error) {
        throw error;
      }
    } else {
      throw error;
    }
  }
};

module.exports = index;
