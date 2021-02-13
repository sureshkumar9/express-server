import * as mongoose from 'mongoose';
import Seeds from './seedData';

class Database {
    static open (MONGO_URL) {
        return new Promise((resolve, reject) => {
            console.log('Inside open method');
            mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            Seeds();
            resolve(null);
        });
    });
}
    static disconnect() {
        console.log('Inside disconnect');
        mongoose.disconnect();
    }
}
export default Database;