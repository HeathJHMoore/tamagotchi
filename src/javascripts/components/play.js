import util from '../helpers/util';
import emojis from './emojis';
import overall from './overallProgress';

let fun = 100;

const playBuilder = () => {
  let domString = '';
  domString += '<div class="sectionContents">';
  domString += '<h2>PLAY</h2>';
  domString += `<h3 id="funScore">${fun}%</h3>`;
  domString += `<div id="playProgressBarOuter" style="background-color: black; width: 100px; padding: 2px;"><div id="playProgresBarInner" style="width: ${fun}%; background-color: white; padding: 10px 0px"></div></div>`;
  domString += '<div id="playButtons">';
  domString += '<button id="videoGames">Video Games</button>';
  domString += '<button id="drugs">Drugs</button>';
  domString += '</div>';
  domString += '</div';
  util.printToDom('play', domString);
};

const playListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'videoGames') {
      if (fun < 100) {
        fun += 10;
        playBuilder();
        overall.scoreGrabber();
        emojis.videoGamesBuilder();
      }
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.id === 'drugs') {
      if (fun > 0) {
        fun -= 10;
        playBuilder();
        overall.scoreGrabber();
        emojis.drugsBuilder();
      }
    }
  });
};

export default { playBuilder, playListeners };
