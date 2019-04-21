import util from '../helpers/util';

const petBuilder = () => {
  const domString = '<img id="tamagotchi" src="https://i.pinimg.com/originals/39/09/de/3909de16ca1de9cfaa8e950b07a861bf.png">';
  util.printToDom('pet', domString);
};

export default { petBuilder };
