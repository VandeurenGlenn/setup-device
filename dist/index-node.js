'use strict';

var fs = require('fs');

(() => {
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
    
    fs.writeFile('./../org.reeflight.config.json', JSON.stringify(config, null, 2), err => {
      return err;
    });
  };
  
  return configFile();

})();
