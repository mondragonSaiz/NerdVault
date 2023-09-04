const { User, Figure } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('figures');
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    figures: async () => {
      return Figure.find();
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError(
            'No user found with this email address'
          );
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log('Login Error:', err);
        throw err;
      }
    },
    addUser: async (parent, { username, email, password, userIcon }) => {
      try {
        const user = await User.create({ username, email, password, userIcon });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },
    addFigure: async (parent, { figureId }, context) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { figures: figureId } },
          { new: true }
        ).populate('figures');
        return updatedUser;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = resolvers;
