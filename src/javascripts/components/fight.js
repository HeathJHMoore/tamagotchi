import util from '../helpers/util';
import overall from './overallProgress';

let strength = 100;

const fightBuilder = () => {
  let domString = '';
  domString += '<div class="sectionContents">';
  domString += '<div>';
  domString += '<button id="runAway">Run Away</button>';
  domString += '<button id="commitViolence">Be Violent</button>';
  domString += '</div>';
  domString += `<div id="fightProgressBarOuter" style="background-color: black; width: 100px; padding: 2px;"><div id="fightProgresBarInner" style="width: ${strength}%; background-color: white; padding: 10px 0px"></div></div>`;
  domString += `<h3 id="strengthScore">${strength}</h3>`;
  domString += '<h2>FIGHT</h2>';
  domString += '</div';
  util.printToDom('fight', domString);
};

const fightListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'runAway') {
      if (strength < 100) {
        strength += 2;
        fightBuilder();
        overall.scoreGrabber();
      }
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.id === 'commitViolence') {
      if (strength > 0) {
        strength -= 2;
        fightBuilder();
        overall.scoreGrabber();
      }
    }
  });
};

export default { fightBuilder, fightListeners };
