const schedule = require('node-schedule');
const Enrollment = require('../models/enrollmentSchema');

schedule.scheduleJob('0 0 * * *', async () => {
  try {
    const today = new Date();

    const enrollments = await Enrollment.find({});

    for (const enrollment of enrollments) {
      const joinedAt = new Date(enrollment.joinedAt);
      const diffInDays = Math.floor((today - joinedAt) / (1000 * 60 * 60 * 24));

      if (diffInDays > 30) {
        await Enrollment.findByIdAndDelete(enrollment._id);
        console.log(`🗑️ Removed enrollment for user ${enrollment.userId} from mess ${enrollment.messId}`);
      }
    }

    console.log('Daily cleanup of old enrollments complete');
  } catch (err) {
    console.error('Error during enrollment cleanup:', err);
  }
});
