"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require("dotenv").config();
const client = new pg_1.Client({
    connectionString: process.env.POSTGRESS_URL
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
          CREATE TABLE users (
              id SERIAL PRIMARY KEY,
              username VARCHAR(50) UNIQUE NOT NULL,
              email VARCHAR(255) UNIQUE NOT NULL,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
      `);
        // console.log(result)
    });
}
function createAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
      CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
      `);
    });
}
// createUsersTable();
// createAddressTable();
function addValue(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect(); // Ensure client connection is established
            // SQL injection attack passing value direactly rather passing as $1
            // const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user334@example.com', 'userpassword');";
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
            const VALUES = [username, email, password];
            const res = yield client.query(insertQuery, VALUES);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
function addAdress(city, country, street, pincode, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect(); // Ensure client connection is established
            // SQL injection attack passing value direactly rather passing as $1
            // const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user334@example.com', 'userpassword');";
            const insertQuery = "INSERT INTO addresses (user_id, city,country,street,pincode) VALUES ($1, $2, $3,$4,$5);";
            const VALUES = [user_id, city, country, street, pincode];
            const res = yield client.query(insertQuery, VALUES);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
function get(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const getQuery = "Select * from users where username =$1";
            const value = [username];
            const res = yield client.query(getQuery, value);
            if (res.rows.length > 0) {
                console.log("user found", res.rows[0]);
            }
            else {
                console.log("No user exists");
            }
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
function getAllData(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const getQuery = "Select u.username,u.email,a.city,a.street,a.pincode,a.country from users u JOIN addresses a ON a.user_id = u.id where u.id =$1";
            const value = [user];
            const res = yield client.query(getQuery, value);
            if (res.rows.length > 0) {
                console.log("user found", res.rows[0]);
            }
            else {
                console.log("No user exists");
            }
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// addValue("leander06","leanderdsilva06@gmail.com","knock123")
// get("leander6")
function update(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const updateQuery = "update users set email=$1, password=$2 where username =$3";
            const value = [email, password, username];
            const res = yield client.query(updateQuery, value);
            console.log(res);
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// update("leander06","leanderdsilva009@gmail.com","knock123009")
// addAdress("mumbai","india","talav road","401203",6);
getAllData(6);
