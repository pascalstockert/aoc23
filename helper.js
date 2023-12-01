import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const readTextFileFromPath = async (day) => {
  return new Promise(resolve => {
    readFile(`${__dirname}/${day}/${readArg(2)}`)
      .then(data => {
        resolve(parseText(data));
      })
  })
}

export const readArg = (index) => {
  return process.argv[index];
}

export const readFile = async (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  })
};

export const parseText = (byteArray) => {
  return byteArray.toString();
}
