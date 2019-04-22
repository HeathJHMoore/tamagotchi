const emojiPrintToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const broccoliBuilder = () => {
  const domString = '<img id="broccoliImage" src="../../../images/broccoli.png" height="120px" style="position: absolute; opacity: 0;">';
  emojiPrintToDom('emojis', domString);
};

const pizzaBuilder = () => {
  const domString = '<img id="pizzaImage" src="../../../images/pizza.png" height="120px" style="position: absolute; opacity: 0;">';
  emojiPrintToDom('emojis', domString);
};

const videoGamesBuilder = () => {
  const domString = '<img id="videoGamesImage" src="../../../images/video-game.png" height="120px" style="position: absolute; opacity: 0;">';
  emojiPrintToDom('emojis', domString);
};

const drugsBuilder = () => {
  const domString = '<img id="drugsImage" src="../../../images/pill.png" height="120px" style="position: absolute; opacity: 0;">';
  emojiPrintToDom('emojis', domString);
};

const runAwayBuilder = () => {
  const domString = '<img id="runAwayImage" src="../../../images/run-away.png" height="120px" style="position: absolute; opacity: 0;">';
  emojiPrintToDom('emojis', domString);
};

const violenceBuilder = () => {
  const domString = '<img id="violenceImage" src="../../../images/violence.png" height="120px" style="position: absolute; opacity: 0;">';
  emojiPrintToDom('emojis', domString);
};

const sleepBuilder = () => {
  const domString = '<img id="sleepImage" src="../../../images/sleep.png" height="120px" style="position: absolute; opacity: 0;">';
  emojiPrintToDom('emojis', domString);
};

const coffeeBuilder = () => {
  const domString = '<img id="coffeeImage" src="../../../images/coffee.png" height="120px" style="position: absolute; opacity: 0;">';
  emojiPrintToDom('emojis', domString);
};

export default {
  broccoliBuilder,
  pizzaBuilder,
  videoGamesBuilder,
  drugsBuilder,
  runAwayBuilder,
  violenceBuilder,
  sleepBuilder,
  coffeeBuilder,
};
