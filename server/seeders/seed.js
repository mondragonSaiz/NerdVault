const db = require('../config/connection');
const { User, Figure } = require('../models');
const figureData = require('./figuresData.json');

db.once('open', async () => {
  // await User.deleteMany({});
  // await Thought.create(thoughtSeeds);
  await Figure.deleteMany({});
  await Figure.create(figureData);
  console.log('all done!');
  process.exit(0);
});
