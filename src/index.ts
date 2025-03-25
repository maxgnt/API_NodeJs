import { app } from './app';
import dotenv from 'dotenv';

import { connectDB } from './config/database';

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
})

.catch((error) => {
    console.error('Erreur de connexion MongoDB :', error);

});


