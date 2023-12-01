import { readTextFileFromPath } from '../helper.js';

const data = await readTextFileFromPath('01');
const lines = data.split('\r\n').filter(line => line);
const writtenNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const result = lines
  .map(line => {
    const numbers = [];
    [...line].forEach((character, charIndex) => {
      if (!isNaN(character)) {
        numbers.push(character);
      }

      writtenNumbers.forEach((number, numberIndex) => {
        if (line.slice(charIndex).startsWith(number)){
          numbers.push(numberIndex + 1);
        }
      })
    });

    return `${numbers[0]}${numbers[numbers.length-1]}`;
  })
  .reduce((prev, cur) => {
    return Number(prev) + Number(cur);
  }, 0)

console.log(result);
