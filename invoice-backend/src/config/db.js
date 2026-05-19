const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('[DB] MongoDB connected'); // ✅ log output
  mongoose.connection.on('error', (err) => {
    console.error('[DB] MongoDB connection error:', err); // ✅ log errors
  });
  mongoose.connection.on('disconnected', () => {
    console.log('[DB] MongoDB connection disconnected'); // ✅ log output
  }); 
};
