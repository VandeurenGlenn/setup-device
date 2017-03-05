'use strict';
import {writeFile} from 'fs';
import {spawn} from 'child_process';

const configFile = () => {
  const uid = () => {
    return Math.random().toString(36).slice(-16);
  };
  
  const config = {
    lanes: [
      "0x03",
      "0x04",
      "0x05"
    ],
    model: "prototype-a",
    serial: Date.now(),
    uid : `${uid()}-${uid()}`
  };
  
  writeFile('./../org.reeflight.config.json', JSON.stringify(config, null, 2), err => {
    console.log(err);
  });
};

const nodeUpdate = () => {
  
};

configFile();
nodeUpdate();
