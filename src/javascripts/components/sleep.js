import util from '../helpers/util';
import emojis from './emojis';
import overall from './overallProgress';

let energy = 100;

const sleepBuilder = () => {
  let domString = '';
  domString += '<div class="sectionContents">';
  domString += '<div>';
  domString += '<button id="rest">Rest</button>';
  domString += '<button id="coffee">Coffee</button>';
  domString += '</div>';
  domString += `<div id="fightProgressBarOuter" style="background-color: black; width: 100px; padding: 2px;"><div id="fightProgresBarInner" style="width: ${energy}%; background-color: white; padding: 10px 0px"></div></div>`;
  domString += `<h3 id="energyScore">${energy}</h3>`;
  domString += '<h2>SLEEP</h2>';
  domString += '</div';
  util.printToDom('sleep', domString);
};

const sleepListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'rest') {
      if (energy < 100) {
        energy += 2;
        sleepBuilder();
        overall.scoreGrabber();
        emojis.sleepBuilder();
      }
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.id === 'coffee') {
      if (energy > 0) {
        energy -= 2;
        sleepBuilder();
        overall.scoreGrabber();
        emojis.coffeeBuilder();
      }
    }
  });
};

export default { sleepBuilder, sleepListeners };
