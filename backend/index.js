const connectDB  = require('./db/db');
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoute');
const messOwnerRouter = require('./routes/messOwnerRoute');
const messRouter = require('./routes/messRoute');
const jobRouter = require('./routes/jobRouter')
const path = require('path');
require('./cron/removeOldMembers'); // ✅ Cron job will auto start

app.use(cors({ origin: ["https://meal-sphere-psi.vercel.app", "http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(cookieParser())
app.get('/', (req, res) => {
  res.send('Welcome to MealSphere API');
});
app.use('/api/v1/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v1/user', userRouter);
app.use('/api/v1/messOwner', messOwnerRouter);
app.use('/api/v1/mess', messRouter);
app.use('/api/v1/job', jobRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log('🚀 Server is running on port 3000');
    });
  } catch (err) {
    console.error('❌ Failed to connect to the database', err);
    process.exit(1);
  }
};

startServer();
