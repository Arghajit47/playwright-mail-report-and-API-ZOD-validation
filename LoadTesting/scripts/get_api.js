import http from "k6/http";
import { check } from "k6";

export const options = {
  stages: [
    { duration: "5s", target: 2 },
    { duration: "5s", target: 1 },
    { duration: "3s", target: 0 },
  ],
};

const params = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Define the default function to execute
export default function () {
  // Make a GET request to the Demoblaze website
  const res = http.get("https://api.demoblaze.com/entries", params);

  // Add a check to ensure the response was successful
  check(res, {
    "Status is validation": (res) => res.status === 200,
  });
}
