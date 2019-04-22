import util from '../helpers/util';

const petBuilder = () => {
  const domString = '<img id="tamagotchi" src="../../../images/sunglasses.png">';
  util.printToDom('pet', domString);
};

export default { petBuilder };
