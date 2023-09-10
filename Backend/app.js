const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const util = require("./util");
const queries = require("./queries");
const app = express();
const port = 3001;

const pool = mysql.createPool({
  host: "localhost", // Replace with your MySQL host
  user: "root", // Replace with your MySQL user
  password: "password", // Replace with your MySQL password
  database: "healthhub", // Replace with your MySQL database
  waitForConnections: true,
  connectionLimit: 10, // Adjust the connection limit as needed
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed: ", err);
  } else {
    console.log("Connected to MySQL database");
    connection.release();
  }
});

const jwtSecretKey =
  "eyJhbGciOiJIUzI1NiJ9eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDMwMzcyNCwiaWF0IjoxNjk0MzAzNzI0fQ_8QqEMApVETXuznNE5zgTXu";

app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json("{Hello World!}");
});

app.post("/registerClient", async (req, res) => {
  let name = req.body.name;
  let birth = req.body.birth;
  let password = req.body.password;
  let email = req.body.email;

  const hashedPassword = await bcrypt.hash(password, 10);

  pool.query(
    "INSERT INTO clients (name, email, password, birth) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, util.convertToMySQLDate(birth)],
    (error, results) => {
      if (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Failed to add user" });
      } else {
        console.log("User added successfully");
        res.status(201).json({ message: "User added successfully" });
      }
    }
  );
});

app.post("/loginClient", async (req, res) => {
  console.log(req.body);

  let password = req.body.password;
  let email = req.body.email;

  // Check if the user exists in the database
  pool.query(
    "SELECT * FROM clients WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to authenticate" });
      } else if (results.length === 0) {
        res.status(401).json({ error: "Invalid credentials" });
      } else {
        // Compare the provided password with the hashed password from the database
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // Generate a JSON Web Token (JWT)
          const token = jwt.sign(
            { userId: user.idclients, isClient: true, name: user.name },
            jwtSecretKey
          );

          res.json({ message: "Login successful", token });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      }
    }
  );
});

app.post("/registerDoctor", async (req, res) => {
  let name = req.body.name;
  let city = req.body.city;
  let Speciality = req.body.Speciality;
  let password = req.body.password;
  let email = req.body.email;

  const hashedPassword = await bcrypt.hash(password, 10);

  pool.query(
    "INSERT INTO doctors (Name, City, Speciality, Email, Password) VALUES (?, ?, ?, ?, ?)",
    [name, city, Speciality, email, hashedPassword],
    (error, results) => {
      if (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Failed to add user" });
      } else {
        console.log("User added successfully");
        res.status(201).json({ message: "User added successfully" });
      }
    }
  );
});

app.post("/loginDoctor", async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  console.log(password);
  console.log(email);
  // Check if the user exists in the database
  pool.query(
    "SELECT * FROM doctors WHERE Email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to authenticate" });
      } else if (results.length === 0) {
        res.status(401).json({ error: "Invalid credentials" });
      } else {
        // Compare the provided password with the hashed password from the database
        const user = results[0];
        console.log(user);
        const passwordMatch = await bcrypt.compare(password, user.Password);

        if (passwordMatch) {
          // Generate a JSON Web Token (JWT)
          const token = jwt.sign(
            { userId: user.idDoctors, isClient: false, name: user.Name },
            jwtSecretKey
          );

          res.json({ message: "Login successful", token });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      }
    }
  );
});

app.get("/make_apointment", (req, res) => {
  let idDoctor = req.body.idDoctor;
  let Datetieme = req.body.Datetieme;
  let Timespan = req.body.Timespan;
  const token = req.headers.authorization;

  if (util.verifyToken(token, jwtSecretKey) !== null) {
    //console.log(queries.checkForOverlap(idDoctor, Datetieme, Timespan, pool));
    queries.checkForOverlap(
      idDoctor,
      Datetieme,
      Timespan,
      pool,
      (err, results) => {
        if (err) {
          res.json({ message: "faild" });
        } else {
          const idClient = util.getUserIdByToken(token, jwtSecretKey);
          queries.makeApointment(idDoctor, idClient, Datetieme, Timespan, pool);
          res.json({ message: "successful" });
        }
      }
    );
    /*
    if (queries.checkForOverlap(idDoctor, Datetieme, Timespan, pool)) {
      const idClient = util.getUserIdByToken(token, jwtSecretKey);
      queries.makeApointment(idDoctor, idClient, Datetieme, Timespan, pool);
      res.json({ message: "successful" });
    } else {
      res.json({ message: "faild" });
    }
    */
  }
});

app.get("/prueba", (req, res) => {
  const token = req.headers.authorization;
  //console.log(token);

  const decodedToken = jwt.verify(token, jwtSecretKey);
  console.log(decodedToken);

  res.json("{Hello World!}");
});

app.get("/getMedicalRecord", (req, res) => {
  res.json("{Hello World!}");
});

/*
  
  app.get("/setMedicalRecord", (req, res) => {
    res.json("{Hello World!}");
  });
  
  app.get("/getOcupiedApointments", (req, res) => {
    res.json("{Hello World!}");
  });
  */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//jwt de doctor
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQ2xpZW50Ijp0cnVlLCJuYW1lIjoiRGllZ28iLCJpYXQiOjE2OTQzMjUzMTB9.9YhIx3aCUzLpUsyCRa9W4hEm9H2Nw8Tt9Az3B3ILjrw

//jwt de paciente
//
