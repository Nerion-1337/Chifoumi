require('dotenv').config();
const mysql = require('mysql2');

// Base utilisateur 10
const usersData = ["Newton", "Thibaut", "Elon", "Maxime", "Nérion", "Estelle", "Rogue", "Alber", "Satoshi", "Sirena"]

// Configuration de la connexion à MySQL sans spécifier de base de données
const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.USERDATABASE,
    password: process.env.PASSWORD
});

// Créer la base de données si elle n'existe pas
const createDatabase = `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`;

// Exécuter la création de la base de données
connection.query(createDatabase, (error, results) => {
  if (error) throw error;
  console.log(`Database "${process.env.DATABASE}" créée ou déjà existante.`);

  // Se connecter à la base de données nouvellement créée ou existante
  connection.changeUser({database : process.env.DATABASE}, (err) => {
    if (err) throw err;

    // Création de la table "users"
    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        pseudo VARCHAR(255),
        score INT DEFAULT 0,
        date_ajout TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        date_maj TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;

    // Exécution des requêtes pour créer les tables
    connection.query(createUsersTable, (error, results) => {
      if (error) throw error;
      console.log('Table "users" créée !');


    // Insertion des données des users
  const insertusersQuery = 'INSERT INTO users (pseudo, score) VALUES (?, ?)';
  usersData.map((item) => {
    const score = Math.floor(Math.random() * 21) - 10;
    connection.query(insertusersQuery, [item, score ], (error, results) => {
      if (error) throw error;
      console.log(`User ${item} inséré !`);
    });
  });  

      connection.end();
    });
  });
});