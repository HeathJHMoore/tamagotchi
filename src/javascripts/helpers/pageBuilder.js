import eat from '../components/eat';
import play from '../components/play';
import fight from '../components/fight';
import sleep from '../components/sleep';
import overall from '../components/overallProgress';


const pageBuilder = () => {
  eat.eatBuilder();
  play.playBuilder();
  fight.fightBuilder();
  sleep.sleepBuilder();
  overall.scoreGrabber();
  eat.eatListeners();
  play.playListeners();
  fight.fightListeners();
  sleep.sleepListeners();
};

export default { pageBuilder };
