import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 2000 },
    { duration: "5m", target: 10000 },
    { duration: "30s", target: 0 },
  ],
};

// Define the default function to execute
export default function () {
  // Make a GET request to the Demoblaze website
  const res = http.get("https://www.demoblaze.com/");
}
