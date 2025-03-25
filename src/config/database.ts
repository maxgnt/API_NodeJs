import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todo-app';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(' MongoDB connecté avec succès');
  } catch (error) {
    console.error('Erreur de connexion MongoDB :', error);
    process.exit(1);
  }
};
