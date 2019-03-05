'use strict';
import { join } from 'path';
import { writeFile, readFile } from 'fs';
import { promisify } from 'util';
import { homedir } from 'os';
import uuid from 'uuid/v4';

const write = promisify(writeFile);
const read = promisify(readFile);

export default async (path = 'org.leofcoin.homecontrol.json', config = {}) => {
  path = join(homedir(), path);

  const init = async () => {
    const _config = {
      model: 'prototype-a',
      serial: Date.now(),
      uid : uuid()
    };

    config = JSON.stringify({ ..._config, ...config }, null, 2);
    await write(path, config);
    return config;
  };

  let data;

  try {
    data = await read(path);
    return JSON.parse(data.toString());
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        data = await init();
      } catch (error) {
        throw error;
      }
    } else {
      throw error;
    }
  }
  return data;
};
