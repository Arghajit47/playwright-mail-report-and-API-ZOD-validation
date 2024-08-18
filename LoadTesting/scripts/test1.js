import http from "k6/http";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js"; // Import textSummary for HTML output

// Define the test options
export const options = {
  vus: 10, // Number of virtual users to simulate
  iterations: 20, // Number of iterations to run
  duration: "1m", // Add a duration to control the test length
};

// Define the default function to execute
export default function () {
  // Make a GET request to the Demoblaze website
  const res = http.get("https://www.demoblaze.com/");

  // Add a check to ensure the response was successful
  if (res.status !== 200) {
    console.error(`Error: ${res.status} ${res.statusText}`);
  }
}

// Generate the summary at the end of the test
