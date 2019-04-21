import utility from '../helpers/util';

let average = 100;

const overallProgressBuilder = (newAverage) => {
  let domString = '<h2>Overall Health</h2>';
  domString += `<div id="overallProgressBarOuter" style="background-color: black; width: 300px; padding: 2px;"><div id="fightProgresBarInner" style="width: ${newAverage}%; background-color: white; padding: 10px 0px"></div></div>`;
  utility.printToDom('progress', domString);
};
const scoreGrabber = () => {
  const newFull = parseInt(document.getElementById('fullScore').innerHTML, 10);
  const newFun = parseInt(document.getElementById('funScore').innerHTML, 10);
  const newStrength = parseInt(document.getElementById('strengthScore').innerHTML, 10);
  const newEnergy = parseInt(document.getElementById('energyScore').innerHTML, 10);
  average = (newFull + newFun + newStrength + newEnergy) / 4;
  console.error(average);
  overallProgressBuilder(average);
};


export default { scoreGrabber };
