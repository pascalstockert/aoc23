import { readTextFileFromPath } from '../helper.js';

const data = await readTextFileFromPath('02');
let games = data.split('\r\n').filter(line => line);

const score = games
  .map(game => game.split(':')[1])
  .map(game => game.split(';'))
  .map(rounds =>
    rounds
      .map(round =>
        round.split(',').map(pull => pull.trim())
      )
      .map(pulls =>
        pulls
          .map(pull => pull.split(' '))
      )
      .map(pulls => {
        const obj = {};
        pulls.forEach(pull => {
          obj[pull[1]] = Math.max(obj[pull[1]] ?? 0, Number(pull[0]) ?? 0)
        })

        return obj;
      })
  )
  .map(rounds => {
    console.log(rounds)
    const obj = {};
    rounds.forEach(round => {
      obj.red = Math.max(obj.red ?? 0, round.red ?? 0);
      obj.green = Math.max(obj.green ?? 0, round.green ?? 0);
      obj.blue = Math.max(obj.blue ?? 0, round.blue ?? 0);
    })

    return obj
  })
  .map(minPulls => minPulls.red * minPulls.green * minPulls.blue)
  .reduce((prev, cur) => {return prev + cur}, 0)

console.log(score);
