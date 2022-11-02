import mongoose from 'mongoose';

const Connection = async (password) => {
    const URL = `mongodb+srv://abba:${password}@cluster0.ne9z6kw.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;