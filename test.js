const { generateCsv } = require('./dist/index');

const options = ['first', 'last', 'birthday', 'phone', 'email'];
const rowCount = 2000;
const path = process.cwd() + '/temp.csv';

generateCsv(options, rowCount, path);