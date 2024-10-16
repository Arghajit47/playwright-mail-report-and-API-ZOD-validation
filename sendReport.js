const nodemailer = require("nodemailer");
const fs = require("fs").promises;
const path = require("path");
const archiver = require("archiver");
const jsonData = require("./monocart-report/index.json");
const fileSystem = require("fs");
require("dotenv").config();

let projectName;

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

// Function to zip the folder asynchronously using async/await
const zipFolder = async (folderPath, zipPath) => {
  return new Promise((resolve, reject) => {
    const output = fileSystem.createWriteStream(zipPath); // Must use require("fs") directly here
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => {
      console.log(`${archive.pointer()} total bytes`);
      console.log("Folder has been zipped successfully.");
      resolve(); // Resolve the promise after zipping is complete
    });

    archive.on("error", (err) => {
      reject(err); // Reject the promise in case of an error
    });

    archive.pipe(output);
    archive.directory(folderPath, false); // Zip the folder without the parent folder
    archive.finalize(); // Finalize the archive
  });
};

// Function to convert JSON data to HTML table format
const generateHtmlTable = (data) => {
  projectName = data.rows[0].title;
  const stats = data.summary;
  const total = stats.tests.value;
  const passedPercentage = ((stats.passed.value / total) * 100).toFixed(2);
  const passedTests = stats.passed.value;
  const failedPercentage = ((stats.failed.value / total) * 100).toFixed(2);
  const failedTests = stats.failed.value;
  const skippedPercentage = ((stats.skipped.value / total) * 100).toFixed(2);
  const skippedTests = stats.skipped.value;
  const flakyPercentage = ((stats.flaky.value / total) * 100).toFixed(2);
  const flakyTests = stats.flaky.value;
  const startTime = data.dateH;
  const durationSeconds = data.durationH;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Stats Report</title>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      table, th, td {
        border: 1px solid black;
      }
      th, td {
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <h1>${projectName} Statistics Report</h1>
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Test Start Time</td>
          <td>${startTime}</td>
        </tr>
        <tr>
          <td>Test Run Duration (Seconds)</td>
          <td>${durationSeconds}</td>
        </tr>
        <tr>
          <td>Total Tests Count</td>
          <td>${total}</td>
        </tr>
        <tr>
          <td>Test Passed</td>
          <td>${passedTests} (${passedPercentage}%)</td>
        </tr>
        <tr>
          <td>Skipped Tests</td>
          <td>${skippedTests} (${skippedPercentage}%)</td>
        </tr>
        <tr>
          <td>Test Failed</td>
          <td>${failedTests} (${failedPercentage}%)</td>
        </tr>
        <tr>
          <td>Flaky Tests</td>
          <td>${flakyTests} (${flakyPercentage}%)</td>
        </tr>
      </tbody>
    </table>
    <p>With regards,</p>
    <p>GP Profile QA Team</p>
  </body>
  </html>
  `;
};

// Async function to send an email
const sendEmail = async (zipPath, projectName) => {
  try {
    console.log("Starting the sendEmail function...");

    // Configure nodemailer transporter
    const secureTransporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD, // Ensure you use app password or secured token
      },
    });

    const reportPath = path.join(__dirname, "monocart-report/index.html");

    // Read report file
    const report = await fs.readFile(reportPath, "utf8");
    console.log("Report file read successfully");

    // Generate HTML content for email
    const htmlContent = generateHtmlTable(jsonData);

    // Configure mail options
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: [process.env.SENDER_EMAIL || ""],
      subject: "Automation Run Report " + new Date().toLocaleString(),
      html: htmlContent,
      attachments: [
        {
          filename: `${projectName} report.html`,
          path: reportPath, // Attach the zipped folder
          contentType: "html",
        },
      ],
    };

    // Send email
    const info = await secureTransporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

// Main function to zip the folder and send the email
const main = async () => {
  const folderPath = "./monocart-report";
  const zipPath = path.join(__dirname, `${projectName} report.zip`);
  await delay(10000);
  try {
    // Zip the folder
    await zipFolder(folderPath, zipPath);
    console.log("Folder zipped successfully");

    // Send the email with the zip file attached
    await sendEmail(zipPath, projectName);
  } catch (error) {
    console.error("Error in main function: ", error);
  }
};

main();
