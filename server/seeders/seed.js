const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  // await Thought.deleteMany({});
  // await Thought.create(thoughtSeeds);

  console.log('all done!');
  process.exit(0);
});
