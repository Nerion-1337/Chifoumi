const fs = require('fs');
const crypto = require('crypto');

// Fonction pour générer une clé aléatoire de 60 caractères
const generateTokenSecret = () => {
  return crypto.randomBytes(45).toString('hex'); // 45 bytes * 2 hex chars/byte = 90 chars
};

// Contenu du fichier .env
const envContent = `
TOKEN_SECRET="${generateTokenSecret()}"
PORT="5000"
URL_CLIENT="http://localhost:3000"
DATABASE="chifoumi"
USERDATABASE="root"
PASSWORD="root"
`;

// Écrire le contenu dans le fichier .env
fs.writeFile('.env', envContent.trim(), (err) => {
  if (err) {
    console.error('Error writing to .env file', err);
  } else {
    console.log('.env file created successfully');
  }
});
