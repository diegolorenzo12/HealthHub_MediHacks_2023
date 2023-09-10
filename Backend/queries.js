const util = require("./util");

function makeApointment(
  idDoctor,
  idClient,
  inputDatetime,
  inputTimespanMinutes,
  pool
) {
  const mysqlDatetime = util.convertToMySQLDatetime(inputDatetime);

  const sql = `
    INSERT INTO apointments (FkDoctor, FkClient, Datetime, TimespanMinutes)
    VALUES (?, ?, ?, ?)`;

  pool.query(
    sql,
    [idDoctor, idClient, mysqlDatetime, inputTimespanMinutes],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        return false;
      }
      console.log("Data inserted successfully");
      return true;
    }
  );
}

function checkForOverlap(
  idDoctor,
  inputDatetime,
  inputTimespanMinutes,
  pool,
  callback
) {
  // Format input datetime and timespan into MySQL datetime and time formats
  const mysqlDatetime = util.convertToMySQLDatetime(inputDatetime);

  // Create an SQL query to find overlapping records
  /*
  const sql = `
    SELECT *
    FROM apointments
    WHERE (Datetime + INTERVAL TimespanMinutes MINUTE) >= ? 
    AND ? >= Datetime AND ? = FkDoctor`;
*/

  const sql = `SELECT *
FROM apointments
WHERE ( Datetime <= ? + INTERVAL ? MINUTE AND Datetime + INTERVAL TimespanMinutes MINUTE >= ? AND ? = FkDoctor)`;

  // Execute the SQL query with placeholders and values
  pool.query(
    sql,
    [mysqlDatetime, inputTimespanMinutes, mysqlDatetime, idDoctor],
    (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        callback(err, false);
      }
      console.log(results);

      if (results.length > 0) {
        console.log("Overlap found with the following records:", results);
        callback(null, false);
      } else {
        console.log("No overlap found.");
        callback(null, true);
      }
    }
  );
}

module.exports = {
  makeApointment,
  checkForOverlap,
};
