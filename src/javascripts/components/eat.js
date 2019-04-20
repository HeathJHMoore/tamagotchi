import util from '../helpers/util';

let full = 100;

const eatBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h2>EAT</h2>';
  domString += `<h3>${full}</h3>`;
  domString += `<div id="eatProgressBarOuter" style="background-color: black; width: 100px; padding: 2px;"><div id="eatProgresBarInner" style="width: ${full}%; background-color: white; padding: 10px 0px"></div></div>`;
  domString += '<div id="eatButtons">';
  domString += '<button id="kale">Kale</button>';
  domString += '<button id="pizza">Pizza</button>';
  domString += '</div>';
  domString += '</div';
  util.printToDom('eat', domString);
};

const eatListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'kale') {
      if (full < 100) {
        full += 2;
        eatBuilder();
      }
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.id === 'pizza') {
      if (full > 0) {
        full -= 2;
        eatBuilder();
      }
    }
  });
};

export default { eatBuilder, eatListeners };
