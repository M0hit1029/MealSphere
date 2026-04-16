import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);

    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connection SUCCESS');
    }
    catch(error){
        console.error('MongoDB connection FAIL',error.message);
        process.exit(1);
    }

