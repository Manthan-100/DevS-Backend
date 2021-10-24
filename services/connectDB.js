import mongoose from 'mongoose';
import config from 'config';

const mongoDbUrl = config.get('MongoDbUrl');

const ConnectDb = async () => {
    try {
        await mongoose.connect(mongoDbUrl, {
            
        });
        console.log("Database connection successfull")
        return true;
    } catch(error) {
        return error;
    }
};

export default ConnectDb;