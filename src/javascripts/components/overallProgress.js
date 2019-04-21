import eat from './eat';
import play from './play';
import fight from './fight';
import sleep from './sleep';
import util from '../helpers/util';

const average = (eat.full + play.fun + fight.strength + sleep.energy) / 4;

// const newAverage = () => {
//   average = (eat.full + play.fun + fight.strength + sleep.energy) / 4;
// };

const overallProgressBuilder = () => {
  let domString = '<h2>Overall Health</h2>';
  domString += `<div id="overallProgressBarOuter" style="background-color: black; width: 300px; padding: 2px;"><div id="fightProgresBarInner" style="width: ${average}%; background-color: white; padding: 10px 0px"></div></div>`;
  util.printToDom('progress', domString);
};

export default { overallProgressBuilder };
