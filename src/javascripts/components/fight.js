import util from '../helpers/util';

let strength = 100;

const fightBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h2>EAT</h2>';
  domString += `<h3>${strength}</h3>`;
  domString += `<div id="fightProgressBarOuter" style="background-color: black; width: 100px; padding: 2px;"><div id="fightProgresBarInner" style="width: ${strength}%; background-color: white; padding: 10px 0px"></div></div>`;
  domString += '<div id="eatButtons">';
  domString += '<button id="runAway">Run Away</button>';
  domString += '<button id="commitViolence">Commit Violence</button>';
  domString += '</div>';
  domString += '</div';
  util.printToDom('fight', domString);
};

const fightListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'runAway') {
      if (strength < 100) {
        strength += 2;
        fightBuilder();
      }
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.id === 'commitViolence') {
      if (strength > 0) {
        strength -= 2;
        fightBuilder();
      }
    }
  });
};

export default { fightBuilder, fightListeners };
