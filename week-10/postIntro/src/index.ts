
import { Client } from 'pg'
require("dotenv").config() 
const client = new Client({
  connectionString:process.env.POSTGRESS_URL
})


async function createUsersTable() {
      await client.connect()
      const result = await client.query(`
          CREATE TABLE users (
              id SERIAL PRIMARY KEY,
              username VARCHAR(50) UNIQUE NOT NULL,
              email VARCHAR(255) UNIQUE NOT NULL,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
      `)
      // console.log(result)
  }
 
async function createAddressTable() {
      await client.connect()
      const result = await client.query(`
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
      `)
}  
// createUsersTable();
// createAddressTable();
async function addValue(username:string,email:string,password:string) {
      try {
            await client.connect(); // Ensure client connection is established

            // SQL injection attack passing value direactly rather passing as $1
            // const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user334@example.com', 'userpassword');";

            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
            const VALUES=[username,email,password]
            const res = await client.query(insertQuery,VALUES);
            console.log('Insertion success:', res); // Output insertion result
          } catch (err) {
            console.error('Error during the insertion:', err);
          } finally {
            await client.end(); // Close the client connection
          }
}

async function addAdress(city:string,country:string,street:string,pincode:string,user_id:number) {
      try {
            await client.connect(); // Ensure client connection is established

            // SQL injection attack passing value direactly rather passing as $1
            // const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user334@example.com', 'userpassword');";

            const insertQuery = "INSERT INTO addresses (user_id, city,country,street,pincode) VALUES ($1, $2, $3,$4,$5);";
            const VALUES=[user_id,city,country,street,pincode]
            const res = await client.query(insertQuery,VALUES);
            console.log('Insertion success:', res); // Output insertion result
          } catch (err) {
            console.error('Error during the insertion:', err);
          } finally {
            await client.end(); // Close the client connection
          }
}

async function get(username:string) {
      try {
            await client.connect(); 
            const getQuery = "Select * from users where username =$1"
            const value =[username]
            const res = await client.query(getQuery,value)
            if(res.rows.length > 0){
                  console.log("user found",res.rows[0]);  
            }
            else{
                  console.log("No user exists");
                  
            }
      }catch (err) {
            console.error('Error during the insertion:', err);
      } finally {
            await client.end(); // Close the client connection
      }
}

async function getAllData(user:number) {
      try {
            await client.connect(); 
            const getQuery = "Select u.username,u.email,a.city,a.street,a.pincode,a.country from users u JOIN addresses a ON a.user_id = u.id where u.id =$1"
            const value =[user]
            const res = await client.query(getQuery,value)
            if(res.rows.length > 0){
                  console.log("user found",res.rows[0]);  
            }
            else{
                  console.log("No user exists");
                  
            }
      }catch (err) {
            console.error('Error during the insertion:', err);
      } finally {
            await client.end(); // Close the client connection
      }
}
// addValue("leander06","leanderdsilva06@gmail.com","knock123")
// get("leander6")

async function update(username:string,email:string,password:string) {
      try {
            await client.connect(); 
            const updateQuery = "update users set email=$1, password=$2 where username =$3"
            const value =[email,password,username]
            const res = await client.query(updateQuery,value)
            console.log(res);
      }catch (err) {
            console.error('Error during the insertion:', err);
      } finally {
            await client.end(); // Close the client connection
      }
}
// update("leander06","leanderdsilva009@gmail.com","knock123009")
// addAdress("mumbai","india","talav road","401203",6);
getAllData(6);