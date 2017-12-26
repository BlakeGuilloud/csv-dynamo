import fs from 'fs';
import json2csv from 'json2csv';
import chalk from 'chalk';
import Chance from 'chance';

const chance = new Chance();

export function generateCsv(opts, rowCount, path) {
  const result = json2csv({
    data: processData(opts, rowCount),
    fields: [...opts],
  });

  fs.writeFileSync(path, result);

  console.log(chalk.blue(`New CSV written to: ${path}, containing ${rowCount} rows.`)); // eslint-disable-line no-console
}

function processData(opts, rowCount) {
  return [...Array(rowCount)]
    .map(() => processOpts(opts));
}

function processOpts(opts) {
  return opts.reduce((acc, currVal) => {
    if (chance[currVal]) {
      acc[currVal] = chance[currVal]();
    } else {
      throw new Error(`Provided property not available : ${currVal}`);
    }

    return acc;
  }, {});
}
