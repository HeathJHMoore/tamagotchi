import eat from '../components/eat';
import play from '../components/play';
import fight from '../components/fight';


const pageBuilder = () => {
  eat.eatBuilder();
  play.playBuilder();
  fight.fightBuilder();
  eat.eatListeners();
  play.playListeners();
  fight.fightListeners();
};

export default { pageBuilder };
