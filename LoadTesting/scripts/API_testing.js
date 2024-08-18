import http from "k6/http";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from "k6";

// export const options = {
//   vus: 10,
//   iterations: 2,
//   duration: "1m",
//   //   stages: [
//   //     { duration: "160s", target: 1 },
//   //     { duration: "100s", target: 1 },
//   //     { duration: "3m", target: 8 },
//   //   ],
// };

export const options = {
  vus: 10, // Number of virtual users to simulate, // Number of iterations to run
  duration: "1m", // Add a duration to control the test length
};
function randomGenerator() {
  return Math.floor(Math.random() * 10);
}

const payload = { name: "test", salary: "123", age: "23" };

export default function () {
  let response = http.get("https://dummy.restapiexample.com/api/v1/employees");
  check(response, {
    "The response validation": (response) => response.status === 200,
  });

  let id = randomGenerator();
  console.log(id);
  response = http.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`);
  check(response, {
    "The response validation": (response) => response.status === 200,
  });
}

export function handleSummary(data) {
  return {
    "summary.json": JSON.stringify(data, null, 2), // Format JSON with indentation
    "summary.html": htmlReport(data), // Generate HTML output using textSummary
  };
}
