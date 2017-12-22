import { readFileSync } from 'fs';
import Papa from 'papaparse';
import { generateCsv, writeFile } from '../lib';

// describe('writeFile', () => {
//   it('should create a new file named as the first parameter', () => {
//     const fileName = 'test/temp.csv';

//     writeFile(fileName, 'firstName, lastName');

//     const fileData = readFileSync(fileName, 'utf8');

//     expect(fileData).toContain('firstName');
//     expect(fileData).toContain('lastName');
//     expect(fileData).toContain(',');
//   });
// });

describe('csv-dynamo', () => {
  it('Should accept options', () => {
    // const fileData = readFileSync(process.cwd() + '/test/temp.csv', 'utf8');
    // const parsed = Papa.parse(fileData);
    // console.log('parsed', parsed.data);
    const opts = {
      firstName: {
        type: 'string',
        name: true,
      },
      lastName: {
        type: 'string',
        name: true,
      },
      age: {
        type: 'integer',
        min: 20,
        max: 30,
      },
    };
    generateCsv(opts, 100);
    // expect(generateCsv(opts)).toEqual(opts);
  });
});
