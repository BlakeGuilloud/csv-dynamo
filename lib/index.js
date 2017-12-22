import fs from 'fs';
import randomName from 'random-name';
import json2csv from 'json2csv';

export function generateCsv(opts, rowCount) {
  const fields = Object.keys(opts);
  const data = processData(opts, rowCount);

  const result = json2csv({ data, fields, });

  fs.writeFileSync(process.cwd() + '/test/temp.csv', result);

  return opts;
}

function processData(opts, rowCount) {
  return [...Array(rowCount)]
    .map(() => processOpt(opts));
}

function processOpt(opts) {
  let returnVal = {};

  for (const prop in opts) {
    switch (prop) {
      case 'firstName':
        returnVal[prop] = randomName.first();
        break;
      case 'lastName':
        returnVal[prop] = randomName.last();
        break;
      case 'age':
        returnVal[prop] = getRandomInt(opts[prop].min, opts[prop].max);
        break;
    }
  }

  return returnVal;
}

function getRandomInt(min = 0, max = 100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}