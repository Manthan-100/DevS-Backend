import mongoose from 'mongoose';
import config from 'config';

const mongoDbUrl = config.get('MongoDbUrl');

const ConnectDb = async () => {
    try {
        await mongoose.connect(mongoDbUrl);
        return true;
    } catch(error) {
        return false;
    }
};

export default ConnectDb;