const path = require('path');
const { exec } = require('child_process');

const ComponentPlop = require('./generators/plops/ComponentPlop');
const ContainerPlop = require('./generators/plops/ContainerPlop');

module.exports = plop => {
   ContainerPlop(plop);
   ComponentPlop(plop);

   plop.setActionType('prettify', (answers, config, plop) => {
      const folderPath = `${path.join(config.path, '**/*.jsx')}`;
      exec(`npm run prettify -- "${folderPath}"`);
      return folderPath;
   });
};
