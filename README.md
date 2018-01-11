## csv-dynamo

A script for generating a realistic CSV file based on provided opts.

### Usage
```javascript
import { generateCsv } from 'csv-dynamo';
// const { generateCsv } = require('csv-dynamo');

const options = [
  'first',
  'last',
  'birthday',
  'phone',
  'email'
];
const rowCount = 10000;
const path = process.cwd() + '/temp.csv';

generateCsv(options, rowCount, path);
```