const util = require("./util");

function makeApointment(
  idDoctor,
  idClient,
  inputDatetime,
  inputTimespanMinutes,
  pool
) {
  const mysqlDatetime = utils.convertToMySQLDatetime(inputDatetime);
  const mysqlTimespan = util.minutesToTimespan(inputTimespanMinutes);

  const sql = `
    INSERT INTO your_table_name (FkDoctor, FkClient, Datetime, Timespan)
    VALUES (?, ?, ?, ?)
  `;

  pool.query(
    sql,
    [idDoctor, idClient, mysqlDatetime, mysqlTimespan],
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

function checkForOverlap(idDoctor, inputDatetime, inputTimespanMinutes, pool) {
  // Format input datetime and timespan into MySQL datetime and time formats
  const mysqlDatetime = util.convertToMySQLDatetime(inputDatetime);
  const mysqlTimespan = minutesToTimespan(inputTimespanMinutes);

  // Create an SQL query to find overlapping records
  const sql = `
    SELECT *
    FROM apointments
    WHERE (Datetime + INTERVAL Timespan SECOND) >= ? 
    AND ? >= Datetime AND ? = FkDoctor
  `;

  // Execute the SQL query with placeholders and values
  pool.query(sql, [mysqlTimespan, mysqlDatetime], (err, results) => {
    if (err) {
      console.error("Error querying the database:", err);
      return false;
    }

    if (results.length > 0) {
      console.log("Overlap found with the following records:", results);
      return false;
    } else {
      console.log("No overlap found.");
      return true;
    }
  });
}

module.exports = {
  makeApointment,
  checkForOverlap,
};
