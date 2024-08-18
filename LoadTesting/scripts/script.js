import http from "k6/http";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from "k6";
// Define the test options
export const options = {
  vus: 20, // Number of virtual users to simulate
  iterations: 20, // Number of iterations to run
  duration: "2m", // Add a duration to control the test length
};

// Define the default function to execute
export default function () {
  // Make a GET request to the Demoblaze website
  const res = http.get("https://www.demoblaze.com/");

  // Add a check to ensure the response was successful
  check(res, {
    "Status is validations": (res) => res.status === 200,
  });
}

// Generate the summary at the end of the test
export function handleSummary(data) {
  return {
    "summary.json": JSON.stringify(data, null, 2), // Format JSON with indentation
    "summary.html": htmlReport(data), // Generate HTML output using textSummary
  };
}
