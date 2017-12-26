## csv-dynamo

A script for generating a realistic CSV file based on provided opts.

### Usage
```javascript
import csvDynamo from 'csv-dynamo';

const options = ['first', 'last', 'birthday'];
const rowCount = 10000;
const path = process.cwd();

csvDynamo(options, rowCount, path);
```