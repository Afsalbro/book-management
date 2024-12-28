const bcrypt = require('bcryptjs');
const db = require('../models');
const User = db.users;

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({
      where: {
        username: 'admin'
      }
    });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 8);
      await User.create({
        username: 'admin',
        password: hashedPassword,
        role: 'admin'
      });
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }
  } catch (error) {
    console.error('Error seeding admin user:', error);
  }
};

module.exports = seedAdmin;
