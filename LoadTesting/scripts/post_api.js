import http from "k6/http";
import { check } from "k6";
import { randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
const payloadData = open("./data/payload.json");

export const options = {
  vus: 15,
  duration: "50s",
};

const params = {
  headers: {
    "Content-Type": "application/json",
  },
  body: payloadData,
};

const payload = {
  name: `Sr. ${randomString(7)}`,
  job: "Developer",
};

let responses = [];

const url = "https://reqres.in/api/users";

export default function () {
  const res = http.post(url, payload);
  console.log("response body *** " + res.body);
  responses.push({
    status: res.status,
    body: res.body,
  });
  check(res, {
    "Status is 201": (res) => res.status === 201,
    "Response ID validation": (res) => res.body.includes("id"),
  });
}

export function handleSummary(data) {
  return {
    "summary.json": JSON.stringify(data),
  };
}
