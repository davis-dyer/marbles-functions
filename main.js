const { createMarble } = require("./marbleMaker");
const { weaveBag } = require("./bagMaker");

const marble = createMarble('small');
console.log(marble);

const bag = weaveBag('mesh');
console.log(bag)