import util from '../helpers/util';
import emojis from './emojis';
import overall from './overallProgress';

let full = 100;

const eatBuilder = () => {
  let domString = '';
  domString += '<div class="sectionContents">';
  domString += '<h2>EAT</h2>';
  domString += `<h3 id="fullScore">${full}</h3>`;
  domString += `<div id="eatProgressBarOuter" style="background-color: black; width: 100px; padding: 2px;"><div id="eatProgresBarInner" style="width: ${full}%; background-color: white; padding: 10px 0px"></div></div>`;
  domString += '<div id="eatButtons">';
  domString += '<button id="broccoli">Broccoli</button>';
  domString += '<button id="pizza">Pizza</button>';
  domString += '</div>';
  domString += '</div';
  util.printToDom('eat', domString);
};

const eatListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'broccoli') {
      if (full < 100) {
        full += 2;
        eatBuilder();
        overall.scoreGrabber();
        emojis.broccoliBuilder();
      }
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.id === 'pizza') {
      if (full > 0) {
        full -= 2;
        eatBuilder();
        overall.scoreGrabber();
        emojis.pizzaBuilder();
      }
    }
  });
};

export default { eatBuilder, eatListeners };
