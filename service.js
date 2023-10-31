const User = require('./schema');

async function findAll() {
  try {
    return await User.find();
  } catch (error) {
    throw new Error('Server Error');
  }
}

async function findOne(id) {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Server Error');
  }
}

async function create(userData) {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Server Error');
  }
}

async function update(id, userData) {
  try {
    const user = await User.findByIdAndUpdate(id, userData, { new: true });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Server Error');
  }
}

async function remove(id) {
  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Server Error');
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
