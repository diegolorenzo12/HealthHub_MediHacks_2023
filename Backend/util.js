function convertToMySQLDatetime(dateString) {
  // Create a JavaScript Date object from the input date string
  const inputDate = new Date(dateString);

  // Check if the inputDate is a valid date
  if (isNaN(inputDate.getTime())) {
    console.error("Invalid date input");
    return null; // Return null for invalid input
  }

  // Get individual date components
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const day = String(inputDate.getDate()).padStart(2, "0");
  const hours = "00";
  const minutes = "00";
  const seconds = "00";

  // Create the MySQL datetime string
  const mysqlDatetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return mysqlDatetime;
}

function convertToMySQLDate(dateString) {
  // Create a JavaScript Date object from the input date string
  const inputDate = new Date(dateString);

  // Check if the inputDate is a valid date
  if (isNaN(inputDate.getTime())) {
    console.error("Invalid date input");
    return null; // Return null for invalid input
  }

  // Get individual date components
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const day = String(inputDate.getDate()).padStart(2, "0");

  // Create the MySQL date string
  const mysqlDate = `${year}-${month}-${day}`;

  return mysqlDate;
}

function minutesToTimespan(minutes) {
  if (typeof minutes !== "number" || minutes < 0) {
    throw new Error(
      "Invalid input. Please provide a non-negative number of minutes."
    );
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  // Use padStart to ensure leading zeros for single-digit hours and minutes
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = remainingMinutes.toString().padStart(2, "0");

  // The seconds part is always '00' for this conversion
  const seconds = "00";

  return `${formattedHours}:${formattedMinutes}:${seconds}`;
}

function verifyToken(token, secretKey) {
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);

    // If verification is successful, 'decoded' will contain the token payload
    return decoded;
  } catch (error) {
    // If verification fails, an error will be thrown
    console.error("JWT Verification Error:", error.message);
    return null; // Return null or handle the error as needed
  }
}

function getUserIdByToken(token, secretKey) {
  try {
    // Verify and decode the JWT token
    const decodedToken = jwt.verify(token, secretKey);

    // Access the user ID claim (assuming 'userId' is the claim name)
    const userId = decodedToken.userId;
    console.log("User ID:", userId);
    return decodedToken.userId;
    // Now 'userId' contains the user's ID
  } catch (error) {
    // If verification fails, an error will be thrown
    console.error("JWT Verification Error:", error.message);
    return null;
  }
}

module.exports = {
  convertToMySQLDatetime,
  convertToMySQLDate,
  getUserIdByToken,
  verifyToken,
  minutesToTimespan,
};
