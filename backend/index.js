const connectDB  = require('./db/db');
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoute');
const messOwnerRouter = require('./routes/messOwnerRoute');
const messRouter = require('./routes/messRoute');
require('./cron/removeOldMembers'); // ✅ Cron job will auto start

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/messOwner', messOwnerRouter);
app.use('/api/v1/mess', messRouter);

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
